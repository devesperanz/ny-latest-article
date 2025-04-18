# NY Articles

A React + TypeScript + Vite project.

## Project Details

NY Articles is a web application that allows users to browse, search, and read articles from the New York Times.  
Key features include:

- Fetching and displaying the latest articles from the NYT API
- Select functionality to filter by days
- Responsive design for desktop and mobile devices
- Unit testing with Jest and end-to-end testing with Cypress

## Getting Started

### 1. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 2. Run the Application

Start the development server with:

```bash
npm run dev
```

### 3. Execute Tests

#### Run Unit Tests with Jest

Run unit tests using:

```bash
npm test
```

#### Run End-to-End Tests with Cypress

Run end-to-end tests using:

```bash
npm run cypress
```

### 4. Generate Coverage Reports

Generate test coverage reports with:

```bash
npm run coverage
```

## Environment Variables

This project uses environment variables to securely store API keys and endpoints.  
Create a `.env` file in the project root with the following content:

```
SAMPLE ENV

VITE_ARTICLES_API_KEY=your_api_key_here
VITE_ARTICLES_BASE_URL=https://api.nytimes.com/svc/topstories/v2
```
