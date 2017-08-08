

import _merge from 'lodash.merge'


import defaultConfig from './default.json'


export default _merge(defaultConfig, {
    "movieDB" : {
        "apiKey" : "ilVa5ODsbIx697d5Rpd@Da3ocOBXv3"
    },
    "openSubtitle" : {
        "useragent": "UserAgent",
        "username": "qwertz",
        "password": "qwertz123",
    }
})

