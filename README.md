# LinkedIn Profile Finder

## Description

This project is designed to automate the process of searching for LinkedIn profiles based on company names and URLs. It leverages advanced AI technologies and various modules to perform web scraping, data handling, and processing.

## Technologies Used

- **TypeScript**: For static type-checking and improved code quality.
- **Node.js**: As the runtime environment for executing the JavaScript code.
- **LangChain.js**: For building and running the search chain for LinkedIn profiles.
- **Express**: To create a server and handle HTTP requests and responses.
- **Promise.all / p-limit**: For efficient handling of multiple asynchronous operations and optimizing performance.

## AI Technologies

### LangChain.js

LangChain.js is utilized extensively in this project to manage and execute the search process for LinkedIn profiles. It is used to build a search chain that can handle complex queries and return relevant LinkedIn profile information. Key features of LangChain.js used in this project include:

- **Community and Core Modules**: These modules provide essential functionalities for building and running the search chain.
- **Groq Module**: Utilized for querying and manipulating data.
- **Ollama Module**: Integrates additional capabilities and functionalities for advanced search processes.
- **OpenAI Integration**: Leveraged for NLP tasks to understand and process search queries and extract relevant information from LinkedIn profiles.

### Other AI Components

- **Natural Language Processing (NLP)**: Used to interpret search queries and extract meaningful information from the LinkedIn profiles.
- **Web Scraping with AI**: Employs AI techniques to efficiently scrape data from web pages and handle dynamic content.

## Installation

To install the necessary dependencies, run:

`yarn install`

## Usage

To start the project in development mode, use:

`yarn dev`

To build the project, use:

`yarn build`

## Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```
PORT=3000
OPENAI_API_KEY=123
GOOGLECSEID=123
GOOGLE_SEARCH_API_KEY=123
GROQ_API_KEY=123
```

Replace the placeholder values with your actual API keys and configurations.

## Scripts

- \`dev\`: Starts the development server.
- \`build\`: Builds the project using \`tsup\`.
- \`start\`: Runs the built project.
- \`clean\`: Cleans the \`dist\` and \`coverage\` directories.
- \`lint\`: Lints the source code using \`biome\`.
- \`lint:fix\`: Lints and fixes the source code using \`biome\`.
- \`format\`: Formats the source code using \`biome\`.
- \`prepare\`: Prepares the project for Husky.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

[List any acknowledgments, credits, or references here.]
