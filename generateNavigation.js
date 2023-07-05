import fs from 'fs/promises';
import matter from 'gray-matter';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

async function generateNavigation() {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    // Assuming your Markdown files are in a "data" directory at the project root
    const dataDirectory = path.join(__dirname, 'src', 'content', 'data');

    // Get all the Markdown files in this directory
    const filenames = await fs.readdir(dataDirectory);

    // Map over the filenames and create the navigation items
    let navigation = await Promise.all(
        filenames.map(async filename => {
            // Read the Markdown file and parse the frontmatter
            const fileContent = await fs.readFile(path.join(dataDirectory, filename), 'utf8');
            const { data } = matter(fileContent);

            // Use the 'url' field in the frontmatter to generate the href
            let href = data.url;
            if (href === "intro") href = "";
            href = "/" + href;

            return {
                name: data.title,
                href: href,
                icon: null,
                current: false,
            };
        })
    );

    // Remove the last item from the navigation array
    navigation.pop();

    // Write the navigation items to a JSON file
    await fs.writeFile(path.join(__dirname, 'src', 'navigation.json'), JSON.stringify(navigation, null, 2));
}

generateNavigation().catch(console.error);
