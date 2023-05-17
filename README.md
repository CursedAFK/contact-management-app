# Contact Management App with Charts and Maps Documentation

This documentation provides an overview of the Contact Management App with Charts and Maps. The app is built using ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query (aka TanstackQuery). It allows users to manage contacts and view charts and maps displaying COVID-19 data. This documentation covers the app's features, how to use it, and information on the API endpoints used.

## Features

The Contact Management App with Charts and Maps offers the following features:

### Contacts Page

The Contacts page allows users to manage contacts:

- **Add Contacts**: Users can add new contacts by filling out a form.
- **Display Contacts**: A list of all added contacts is displayed.
- **View Contact Details**: Each contact has a button that allows users to view the contact's details.
- **Edit and Delete Contacts**: Users can edit and delete existing contacts.
- **Redux Integration**: The app uses Redux to store contact data.

### Charts and Maps Page

The Charts and Maps page displays COVID-19 data:

- **Line Graph**: A line graph shows the fluctuations in COVID-19 cases over time.
- **React Leaflet Map**: The map uses React Leaflet and displays markers with country-specific COVID-19 data. Clicking on a marker reveals a popup with the country name, total number of active cases, recovered cases, and deaths.

## Setup and Usage

Follow the steps below to set up and run the Contact Management App with Charts and Maps:

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the GitHub/GitLab repository for the app.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the app's dependencies:

   ```shell
   npm install
   ```

### Starting the Development Server

1. In the terminal, run the following command to start the development server:

   ```shell
   npm start
   ```

2. The app will be accessible at `http://localhost:3000` in your browser.

### Building the Production Version

1. To build the production version of the app, run the following command:

   ```shell
   npm run build
   ```

2. The optimized and minified production files will be generated in the `build` directory.

### Deployment

You can deploy the Contact Management App with Charts and Maps to a free hosting service. Some popular options are Vercel, GitHub Pages, or Heroku. Refer to their respective documentation for detailed instructions on deployment.

### API Endpoints

The app fetches COVID-19 data from the following API endpoints:

- **Worldwide Cases**: `https://disease.sh/v3/covid-19/all`
- **Country-Specific Cases**: `https://disease.sh/v3/covid-19/countries`
- **Graph Data for Cases**: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

Ensure that these API endpoints are accessible and provide the necessary data.

## Conclusion

The Contact Management App with Charts and Maps allows users to manage contacts and view COVID-19 data through charts and maps. This documentation provides an overview of the app's features, instructions for setup and usage, and information about the API endpoints used. Feel free to explore the app and leverage its capabilities for contact management and data visualization.
