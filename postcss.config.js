module.exports = {
    plugins: [
        require('autoprefixer')(
            {
                "overrideBrowserslist": [
                  //'> 1%', 'last 5 versions', 'Firefox >= 45', 'iOS >=8', 'Safari >=8','ie >= 10'
                  'last 1 version','> 1%','IE 9 ','Chrome > 49',
                ]

            }
        )
    ]
}