class Plane {
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
}


class Mig extends Plane {
    constructor(maxSpeed) {
        super('Mig', maxSpeed)
    }

    attack = () => {
        console.log('Attack!!! Boom!')
    }

}

class Ty154 extends Plane {
    constructor(maxSpeed) {
        super('TY-154', maxSpeed)
    }
}