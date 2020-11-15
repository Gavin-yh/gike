const chalk = require('chalk')
const init = require('../package/webpack/init')

module.exports = (options) => {
    const { compiler } = init(options)

    compiler.run((err, stats) => {
        if (err) {
            console.log(
                chalk.red(`${err}`)
            )

            process.exit(1)
        }
        
        if (stats.hasErrors()) {
            console.log(
                chalk('Project Build failed')
            )

            process.exit(1)
        }

        console.log(
            chalk.green('Build Complete')
        )

        process.exit(0)
    })
}

