import joint from 'jointjs'

export class Edit {
    constructor() {
        this.initWorkflow()
        // this.autonomousTest() // TODO:: Supprimer cette ligne avant la mise en production
    }

    /**
     * TODO: Supprimer cette méthode avant la mise en production
     */
    autonomousTest() {
        // Ici tu peux écrire un test entièrement autome récupéré sur la doc
        // Il suffit de coller tout le code dans cette méthode et de décommenter this.autonomousTest() du constructeur
        // puis commenter this.initWorkflow()
    }

    /**
     * Init Workflow
     */
    initWorkflow() {
        this.initPaper()
        this.addStartElement()
        this.initClickListener()
    }

    /**
     * Init JointJS paper
     */
    initPaper() {
        this.graph = new joint.dia.Graph;

        this.paper = new joint.dia.Paper({
            el: document.getElementById('paper'),
            model: this.graph,
            width: '100%',
            height: 800,
            gridSize: 10,
            drawGrid: true
        });

    }

    /**
     * Draw a start element
     * @param {int} x
     * @param {int} y
     */

    addStartElement(x, y) {

        if (typeof x === 'undefined') { x = 300}
        if (typeof y === 'undefined') { y = 30}

        var element = new joint.shapes.erd.Derived({
            position: {
                x: x,
                y: y
            },
            attrs: {
                text: {
                    fill: '#ffffff',
                    text: 'Start',
                    letterSpacing: 0,
                    "font-size": '16px',
                    // style: { textShadow: '1px 0 1px #333333' }
                },
                '.inner': {
                    fill: '#fe8550',
                    stroke: 'none',
                    display: 'block'
                },
                '.outer': {
                    fill: '#ffffff',
                    stroke: '#fe8550',
                    'stroke-dasharray': '2,3'
                }
            }
        });

        element.addTo(this.graph)

        return element;
    }

    /**
     * Draw a condition element
     * @param {int} x
     * @param {int} y
     */
    addConditionElement(x, y) {

        if (typeof x === 'undefined') { x = 100}
        if (typeof y === 'undefined') { y = 30}

        var element = new joint.shapes.erd.Relationship({
            position: {
                x: x,
                y: y
            },
            attrs: {
                text: {
                    fill: 'white',
                    text: 'Condition',
                    letterSpacing: 0,
                    "font-size": '16px',
                    // style: { textShadow: '1px 0 1px #333333' }
                },
                '.outer': {
                    fill: '#31d0c6',
                    stroke: 'none'
                },
                style: { cursor: 'pointer' }
            }
        })
        element.resize(120, 120)
        element.addTo(this.graph)

        return element;
    }

    /**
     * Draw a value condition element
     * @param {int} x
     * @param {int} y
     */
    addValueConditionElement(x, y) {

        if (typeof x === 'undefined') { x = 100}
        if (typeof y === 'undefined') { y = 30}

        var element = new joint.shapes.erd.IdentifyingRelationship({
            position: {
                x: x,
                y: y
            },
            attrs: {
                text: {
                    fill: '#ffffff',
                    text: 'Values',
                    letterSpacing: 0,
                    "font-size": '16px',
                    // style: { textShadow: '1px 0 1px #333333' }
                },
                '.inner': {
                    fill: '#7c68fd',
                    stroke: 'none'
                },
                '.outer': {
                    fill: 'none',
                    stroke: '#7c68fd'
                }
            }
        })
        element.resize(120, 120)
        element.addTo(this.graph)

        return element;
    }

    /**
     * Draw an action element
     * @param {int} x
     * @param {int} y
     */
    addActionElement(x, y) {

        if (typeof x === 'undefined') { x = 100}
        if (typeof y === 'undefined') { y = 30}

        var element = new joint.shapes.erd.Entity({
            position: {
                x: x,
                y: y
            },
            attrs: {
                text: {
                    fill: '#ffffff',
                    text: 'Action',
                    letterSpacing: 0,
                    "font-size": '16px',
                    // style: { textShadow: '1px 0 1px #333333' }
                },
                '.outer': {
                    fill: '#ffae00',
                    stroke: 'none',
                },
                '.inner': {
                    fill: '#ffae00',
                    stroke: 'none'
                }
            }
        })
        element.resize(120, 40)
        element.addTo(this.graph)

        return element;
    }

    /**
     * Create a link between two elements
     * @param {Element} source
     * @param {Element} target
     */
    addLink(source, target) {
        var link = new joint.shapes.standard.Link();
        link.source(source);
        link.target(target);
        link.addTo(this.graph)
    }

    /**
     * Create a sub element when user click on an element
     */
    initClickListener() {
        // Create a rectangle on click
        this.paper.on('element:pointerclick', (elementView) => {

            var currentElement = elementView.model
            var position = currentElement.attributes.position

            var newPositionX = position.x
            var newPositionY = position.y + 200

            var newElement = null

            switch (currentElement.attributes.type) {
                case 'erd.Derived': // Start
                    newPositionY = position.y + 150
                    newElement = this.addConditionElement(newPositionX, newPositionY)
                    break

                case 'erd.Relationship': // Condition
                    newElement = this.addValueConditionElement(newPositionX, newPositionY)
                    break

                case 'erd.IdentifyingRelationship': // Values Condition
                    newElement = this.addActionElement(newPositionX, newPositionY)
                    break
            }

            if (newElement !== null) {
                // Add a link between the source element and the new one
                this.addLink(currentElement, newElement)
            }
        })
    }
}