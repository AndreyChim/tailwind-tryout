# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
<<<<<<< HEAD
pin "application", preload: true
=======
pin "application", preload: true
>>>>>>> 486e368745edb11bc28bb2e239542f7d77c8ea20
