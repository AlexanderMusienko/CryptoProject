/**
 * 
 * @param {string} status 
 * @param {object} config // config is object with keys red, green, gray that contains your status values
 * @returns 
 */

function defineColorScheme(status, config) {
    switch(status) {
        case config.red: 
        return 'red'
        
        case config.green:
        return 'green'

        case config.gray:
        return 'gray'
    }
}

export default defineColorScheme;