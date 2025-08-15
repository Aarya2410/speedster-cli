# Speedster CLI

![Speedster CLI Banner](https://raw.githubusercontent.com/Aarya2410/speedster-cli/main/assets/speedster-banner.png)

Speedster CLI is a command-line interface (CLI) tool designed to quickly and accurately measure your internet speed directly from your terminal. It provides essential metrics including ping, download speed, and upload speed, making it a convenient tool for developers, network administrators, and anyone who needs to monitor their internet connection.

## ✨ Key Features

*   **Ping Test:** Measures the latency to a server, indicating the responsiveness of your connection.
*   **Download Speed Test:** Accurately measures the speed at which you can download data from the internet.
*   **Upload Speed Test:** Determines the speed at which you can upload data to the internet.
*   **Lightweight & Fast:** Built with Node.js, it's designed for quick execution and minimal resource usage.
*   **Cross-Platform:** Works seamlessly on macOS, Linux, and Windows.

## 🛠️ Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Commander:** For building robust command-line interfaces.
*   **Axios:** A promise-based HTTP client for making network requests.
*   **Chalk:** For adding beautiful colors and styles to terminal output.
*   **Ora:** For elegant terminal spinners, enhancing user experience during tests.
*   **Figlet:** For generating ASCII art banners.

## 🚀 Installation

To install Speedster CLI, simply run the following command in your terminal:

```bash
curl -sSL https://aarya2410.github.io/speedster-cli/install.sh | sh
```

This script will:

1.  Check for Node.js and npm, installing them if necessary.
2.  Clone the Speedster repository to `~/.speedster-cli`.
3.  Install all required dependencies using `npm ci --only=production`.
4.  Create a symbolic link to the `speedster` executable in `/usr/local/bin`, making it accessible system-wide.

After installation, you can run the `speedster` command from any directory in your terminal.

## 💡 Usage

Once installed, open your terminal and simply type:

```bash
speedster
```

The CLI will automatically start the ping, download, and upload speed tests and display the results in a clear, easy-to-read format.

## 🤝 Contributing

We welcome contributions to Speedster CLI! If you have suggestions for improvements, new features, or bug fixes, please feel free to open an issue or submit a pull request. Before contributing, please read our [Contributing Guidelines](CONTRIBUTING.md) (coming soon).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (coming soon).

## 🌟 Show Your Support

If you find Speedster CLI useful, please consider giving us a star on GitHub! ⭐

---

**Note:** This `README.md` is a work in progress and will be updated with more details, including comprehensive contributing guidelines and license information, soon. Stay tuned!
