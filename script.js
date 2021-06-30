class Mig  {
    constructor (name, maxSpeed) {
        this.name = name
        this.maxSpeed = maxSpeed
        this.status = false
    }

    takeoff = () => {
        this.status = true
    }

    landing = () => {
        this.status = false
    }

    attack = () => {
        console.log('Attack!!! Boom!')
    }

}

class Ty154 {
    constructor (name, maxSpeed) {
        this.name = name
        this.maxSpeed = maxSpeed
        this.satus = false
    }

    takeoff = () => {
        this.status = true
    }

    landing = () => {
        this.status = false
    }
    
}