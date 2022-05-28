        // 0ca063b746578ffb14d9f9455bdb165a

        let btn = document.querySelector("#btnClima")

        btn.addEventListener('click', () => {
            let key = "0ca063b746578ffb14d9f9455bdb165a"

            let ciudad = document.querySelector('#ciudad').value
            ciudad = encodeURIComponent(ciudad)
            // Me va a faltar un paso

            //let url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=" + key
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`

            console.log(url)

            if (ciudad != "") {
                fetch(url)
                    .then((data) => {
                        return data.json()
                    })
                    .then((clima) => {
                        console.log(clima)
                        let temp = clima.main.temp
                        let tempC = temp - 273.15;
                        let html = document.querySelector("#temperatura")
                        html.innerHTML = tempC.toFixed(0)


                        if (tempC < 10) {
                            html.className = "cold"
                        } else {
                            html.className = "warm"
                        }

                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })