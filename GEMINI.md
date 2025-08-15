# Gemini Project Documentation

This document provides a comprehensive overview of the Speedster project for contextual purposes. It will be updated regularly to reflect any significant changes in the codebase.

## Project Overview

**Project Name:** Speedster

**Project Type:** Monorepo

**Packages:**

*   `cli`: A command-line interface (CLI) tool for checking internet speed.
*   `docs`: Project documentation.

## `cli` Package

The `cli` package is a Node.js-based tool that allows users to measure their internet speed, including ping, download speed, and upload speed.

### Key Features:

*   **Ping Test:** Measures the latency to a server.
*   **Download Speed Test:** Measures the speed of downloading a file from a server.
*   **Upload Speed Test:** Measures the speed of uploading a file to a server.

### Technologies Used:

*   **Node.js:** JavaScript runtime environment.
*   **Commander:** A library for creating command-line interfaces.
*   **Axios:** A promise-based HTTP client for making requests.
*   **Chalk:** A library for styling terminal output.
*   **Ora:** A library for displaying elegant terminal spinners.
*   **Figlet:** A library for creating ASCII art from text.

## `docs` Package

The `docs` package contains the project's documentation, which is a simple HTML page. It provides a brief overview of the project and instructions on how to use the CLI tool.

### Technologies Used:

*   **HTML/CSS:** For creating the documentation page.
*   **Serve:** A simple HTTP server for serving the documentation locally.

## Domain Name

The project's domain name is `speedster.com`, as specified in the `CNAME` file.
