#!/usr/bin/env node

const { program } = require('commander');
const axios = require('axios');
const chalk = require('chalk');
const ora = require('ora');
const figlet = require('figlet');
const { Readable } = require('stream');

const HETZNER_URL = 'https://speed.cloudflare.com/';
const FILE_10MB_URL = `${HETZNER_URL}__down?bytes=10000000`;
const UPLOAD_URL = 'https://file.io';

const checkPing = async () => {
  const spinner = ora('Checking Ping...').start();
  try {
    const startTime = Date.now();
    await axios.head(HETZNER_URL);
    const endTime = Date.now();
    const ping = endTime - startTime;
    spinner.succeed(`Ping: ${chalk.green(ping)} ms`);
    return ping;
  } catch (error) {
    spinner.fail('Ping check failed.');
    if (error.response) {
      console.error(chalk.red(`Error: ${error.response.status} ${error.response.statusText}`));
    } else {
      console.error(chalk.red(error.message));
    }
    return null;
  }
};

const checkDownloadSpeed = async () => {
  const spinner = ora('Checking Download Speed...').start();
  try {
    const startTime = Date.now();
    const response = await axios.get(FILE_10MB_URL, { responseType: 'arraybuffer' });
    const endTime = Date.now();
    const durationInSeconds = (endTime - startTime) / 1000;
    const fileSizeInBytes = response.data.length;
    const speedInMbps = ((fileSizeInBytes * 8) / durationInSeconds / 1024 / 1024).toFixed(2);
    spinner.succeed(`Download Speed: ${chalk.green(speedInMbps)} Mbps`);
    return speedInMbps;
  } catch (error) {
    spinner.fail('Download speed check failed.');
    if (error.response) {
      console.error(chalk.red(`Error: ${error.response.status} ${error.response.statusText}`));
    } else {
      console.error(chalk.red(error.message));
    }
    return null;
  }
};

const checkUploadSpeed = async () => {
  const spinner = ora('Checking Upload Speed...').start();
  try {
    const data = Buffer.alloc(10 * 1024 * 1024); // 10MB of data
    const stream = new Readable();
    stream.push(data);
    stream.push(null);

    const startTime = Date.now();
    await axios.post(UPLOAD_URL, stream, {
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    });
    const endTime = Date.now();
    const durationInSeconds = (endTime - startTime) / 1000;
    const speedInMbps = ((data.length * 8) / durationInSeconds / 1024 / 1024).toFixed(2);
    spinner.succeed(`Upload Speed: ${chalk.green(speedInMbps)} Mbps`);
    return speedInMbps;
  } catch (error) {
    spinner.fail('Upload speed check failed.');
    if (error.response) {
      console.error(chalk.red(`Error: ${error.response.status} ${error.response.statusText}`));
    } else {
      console.error(chalk.red(error.message));
    }
    return null;
  }
};

const checkSpeed = async () => {
  console.log(chalk.cyan(figlet.textSync('Speedster', { horizontalLayout: 'full' })));
  await checkPing();
  await checkDownloadSpeed();
  await checkUploadSpeed();
};

program
  .version('1.0.0')
  .description('A CLI tool to check your internet speed.')
  .action(checkSpeed);

program.parse(process.argv);
