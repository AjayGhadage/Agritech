const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.js')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let modified = false;

    // Check if the file contains localhost URLs
    if (content.includes('http://localhost:5001') || content.includes('http://localhost:8001')) {
        
        // Add import statement if it doesn't exist
        if (!content.includes('API_BASE_URL') && !content.includes('ML_API_URL')) {
            // Find a suitable place to insert the import (after other imports)
            const importMatch = content.match(/^import .*$/m);
            const importStr = "import { API_BASE_URL, ML_API_URL } from '../api/config';\n";
            
            if (importMatch) {
               // insert after the last import
               const lastImportIndex = content.lastIndexOf('import ');
               const nextNewline = content.indexOf('\n', lastImportIndex);
               content = content.slice(0, nextNewline + 1) + importStr + content.slice(nextNewline + 1);
            } else {
               content = importStr + content;
            }
        }

        // Replace http://localhost:5001 with ${API_BASE_URL}
        // First convert strings like 'http://localhost:5001/api...' to `${API_BASE_URL}/api...`
        content = content.replace(/'http:\/\/localhost:5001([^']+)'/g, '`${API_BASE_URL}$1`');
        content = content.replace(/"http:\/\/localhost:5001([^"]+)"/g, '`${API_BASE_URL}$1`');
        
        // For unquoted instances (like inside existing template literals)
        content = content.replace(/http:\/\/localhost:5001/g, '${API_BASE_URL}');

        // Do the same for ML service
        content = content.replace(/'http:\/\/localhost:8001([^']+)'/g, '`${ML_API_URL}$1`');
        content = content.replace(/"http:\/\/localhost:8001([^"]+)"/g, '`${ML_API_URL}$1`');
        content = content.replace(/http:\/\/localhost:8001/g, '${ML_API_URL}');

        modified = true;
    }

    if (modified) {
        fs.writeFileSync(f, content);
        console.log(`Updated ${f}`);
    }
});
