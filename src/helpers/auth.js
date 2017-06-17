import $ from 'jquery'

module.exports = {
    login: function(username, pass, cb) {
        if (localStorage.token) {
            if (cb) cb(true)
            return
        }
        this.getToken(username, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
            } else {
                if (cb) cb(false)
            }
        })
    },

    error: null,

    setError: function(err) {
        this.error = err;
    },

    getError: function(err) {
        return this.error;
    }, 
    
    clearError: function(err){
        this.error = null;
    },

    logout: function() {
        delete localStorage.token
    },

    loggedIn: function() {
        return !!localStorage.token
    },

    getToken: function(username, pass, cb) {
        const self = this;

        $.ajax({
            type: 'POST',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            url: 'http://localhost:8000/api/auth/get-token/',
            data: {
                username: username,
                password: pass
            }
        })
        .done(function(res){
                cb({
                    authenticated: true,
                    token: res.token
                });
                console.log(res);
        }).
        fail(function(XMLHttpRequest, textStatus, errorThrown) {
                const jsonResponse = JSON.parse(XMLHttpRequest.responseText);
                self.setError(jsonResponse.non_field_errors[0]);
            }
        );
    }, 
}