const inquirer = require("inquirer");
const ora = require('ora');
const rootPath = process.cwd()
const fs = require('fs-extra')
const template = "direct:https://github.com/SmilMan/gik-template";
// const template = 'direct:git@github.com:SmilMan/mycli_demo.git'
const download = require("download-git-repo");
const shell = require("shelljs");
const chalk = require("chalk");
const childProcess = require('child_process');

let oraMsg = " ✨ Project building.............."

function createDir(dirName) {
    const _dirname = `${rootPath}/${dirName}`;
    const spinner = ora(oraMsg)
    shell.rm('-rf', _dirname);
    spinner.start();
    download(template, _dirname, {
        clone: true
    }, err => {
        spinner.stop();
        if (err) {
            console.log(chalk.red(`download err :${err.message}`))
        } else {
            //TODO  可以在这里动态的去添加依赖
            // const pak = fs.readFileSync(`${_dirname}/package.json`)
            console.log(`\n this project init successful!! \n \n cd ${dirName}  \n npm install`)
        }
    })  
}

module.exports = async (opt) => {
    let dirName = opt.commandArg

    if (!dirName) {
        const { name } = await inquirer.prompt([
            {
                type: "text",
                message: "input your filename",
                name: "name"
            }
        ])

        dirName = name
    }
            
    if (fs.existsSync(dirName)) {
        console.log(chalk.yellow(`The <${dirName}> already exists.`))

        const { ok } = await inquirer.prompt([
          {
            name: 'ok',
            type: 'confirm',
            message: `Do you want to delete the existing file and create a new one?`
          }
        ])
        if (!ok) {
           process.exit(1)
        }
    }

    //TODO  依赖的选择
    const { list } = await inquirer.prompt([
        {
            type: "list",
            choices: ["TypeScirpt", "EcmaScript", "node", "Eslint", "bable"],
            message: "Select the appropriate dependency",
            name: "list"
        },
    ])

    createDir(dirName)
}