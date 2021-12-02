module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },

            '/employeeapi': {
                target: 'http://localhost:8090',
                changeOrigin: true
            }
        }
    }
}