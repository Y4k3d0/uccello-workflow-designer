import joint from 'jointjs'
import 'bootstrap'

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
        this.initContextualButtons()
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
            drawGrid: true,
            clickThreshold: 1,
            restrictTranslate: true,
            interactive: {
                stopDelegation: false
            }
        })

        // this.paper.fitToContent()
    }

    /**
     * Init contextual buttons
     */
    initContextualButtons() {
        this.addActionButton()
        this.addConditionButton()
        this.addValueConditionButton()
        this.addDeleteButton()
    }

    /**
     * Adds a new CustomElement with the type ActionButton
     * @param {int} x 
     * @param {int} y 
     */
    addActionButton(x, y) {
        if (typeof x === 'undefined') { x = 0 }
        if (typeof y === 'undefined') { y = 0 }

        joint.shapes.standard.TextBlock.define('context.ActionButton', {
            attrs: {
                root: {
                    title: 'Add action',
                    visibility: 'hidden'
                },
                body: {
                    fill: 'none',
                    stroke: 'none',
                    style: {
                        cursor: 'pointer',
                        pointerEvents: 'auto'
                    }
                },
                label: {
                    html: '<i class="material-icons">play_circle_outline</i>',
                    style: {
                        cursor: 'pointer'
                    }
                }
            }
        })

        var actionButton = new joint.shapes.context.ActionButton({ id: 'actionButton' })
        actionButton.position(x, y)
        actionButton.resize(30, 30)
        actionButton.addTo(this.graph)
    }
        
    /**
     * Adds a new CustomElement with the type ConditionButton
     * @param {int} x 
     * @param {int} y 
     */
    addConditionButton(x, y) {
        if (typeof x === 'undefined') { x = 0 }
        if (typeof y === 'undefined') { y = 0 }

        joint.shapes.standard.TextBlock.define('context.ConditionButton', {
            attrs: {
                root: {
                    title: 'Add condition',
                    visibility: 'hidden'
                },
                body: {
                    fill: 'none',
                    stroke: 'none',
                    style: {
                        cursor: 'pointer',
                        pointerEvents: 'auto'
                    }
                },
                label: {
                    html: '<i class="material-icons">filter_list</i>',
                    style: {
                        cursor: 'pointer'
                    }
                }
            }
        })

        var conditionButton = new joint.shapes.context.ConditionButton({ id: 'conditionButton' })
        conditionButton.position(x, y)
        conditionButton.resize(30, 30)

        conditionButton.addTo(this.graph)
    }

    /**
     * Adds a new CustomElement with the type ValueConditionButton
     * @param {int} x 
     * @param {int} y 
     */
    addValueConditionButton(x, y) {
        if (typeof x === 'undefined') { x = 0 }
        if (typeof y === 'undefined') { y = 0 }

        joint.shapes.standard.TextBlock.define('context.ValueConditionButton', {
            attrs: {
                root: {
                    title: 'Add value condition',
                    visibility: 'hidden'
                },
                body: {
                    fill: 'none',
                    stroke: 'none',
                    style: {
                        cursor: 'pointer',
                        pointerEvents: 'auto'
                    }
                },
                label: {
                    html: '<i class="material-icons">device_hub</i>',
                    style: {
                        cursor: 'pointer'
                    }
                }
            }
        })

        var valueConditionButton = new joint.shapes.context.ValueConditionButton({ id: 'valueConditionButton' })
        valueConditionButton.position(x, y)
        valueConditionButton.resize(30, 30)

        valueConditionButton.addTo(this.graph)
    }

    /**
     * Adds a new CustomElement with the type DeleteButton
     * @param {int} x 
     * @param {int} y 
     */
    addDeleteButton(x, y) {
        if (typeof x === 'undefined') { x = 0 }
        if (typeof y === 'undefined') { y = 0 }

        joint.shapes.standard.TextBlock.define('context.DeleteButton', {
            attrs: {
                root: {
                    title: 'Delete',
                    visibility: 'hidden'
                },
                body: {
                    fill: 'none',
                    stroke: 'none',
                    style: {
                        cursor: 'pointer',
                        pointerEvents: 'auto'
                    }
                },
                label: {
                    html: '<i class="material-icons">clear</i>',
                    style: {
                        color: 'red',
                        cursor: 'pointer'
                    }
                }
            }
        })

        var deleteButton = new joint.shapes.context.DeleteButton({ id: 'deleteButton' })
        deleteButton.position(x, y)
        deleteButton.resize(30, 30)

        deleteButton.addTo(this.graph)
    }

    /**
     * Draws a start element
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
                    style: {
                        cursor: 'pointer'
                    }
                    // style: { textShadow: '1px 0 1px #333333' }
                },
                '.inner': {
                    fill: '#fe8550',
                    stroke: 'none',
                    display: 'block',
                    style: {
                        cursor: 'pointer'
                    }
                },
                '.outer': {
                    fill: '#ffffff',
                    stroke: '#fe8550',
                    'stroke-dasharray': '2,3',
                    style: {
                        cursor: 'pointer'
                    }
                }
            }
        });

        element.addTo(this.graph)

        return element;
    }

    /**
     * Draws an action element
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
                    style: {
                        cursor: 'pointer'
                    }
                    // style: { textShadow: '1px 0 1px #333333' }
                },
                '.outer': {
                    fill: '#ffae00',
                    stroke: 'none',
                    style: {
                        cursor: 'pointer'
                    }
                },
                '.inner': {
                    fill: '#ffae00',
                    stroke: 'none',
                    style: {
                        cursor: 'pointer'
                    }
                }
            }
        })
        element.resize(120, 40)
        element.addTo(this.graph)

        return element;
    }

    /**
     * Draws a condition element
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
                    style: {
                        cursor: 'pointer'
                    }
                    // style: { textShadow: '1px 0 1px #333333' }
                },
                '.outer': {
                    fill: '#31d0c6',
                    stroke: 'none',
                    style: {
                        cursor: 'pointer'
                    }
                },
                // style: { cursor: 'pointer' }
            }
        })
        element.resize(120, 120)
        element.addTo(this.graph)

        return element;
    }

    /**
     * Draws a value condition element
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
                    style: {
                        cursor: 'pointer'
                    }
                    // style: { textShadow: '1px 0 1px #333333' }
                },
                '.inner': {
                    fill: '#7c68fd',
                    stroke: 'none',
                    style: {
                        cursor: 'pointer'
                    }
                },
                '.outer': {
                    fill: 'none',
                    stroke: '#7c68fd',
                    style: {
                        cursor: 'pointer'
                    }
                }
            }
        })
        element.resize(120, 120)
        element.addTo(this.graph)

        return element;
    }

    /**
     * Creates a link between two elements
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
     * Manages graph events
     */
    initClickListener() {
        var stock = new joint.shapes.standard.Rectangle();
        stock.position(100, 30);
        stock.resize(100, 40);
        stock.attr({
            body: {
                fill: 'blue'
            },
            label: {
                text: 'Stock',
                fill: 'white'
            }
        })
        stock.addTo(this.graph)

        var save = new joint.shapes.standard.Circle();
        save.position(100, 90);
        save.resize(100, 40);
        save.attr({
            body: {
                fill: 'green'
            },
            label: {
                text: 'Save',
                fill: 'white'
            }
        })
        save.addTo(this.graph) 

        this.paper.on('element:pointerdown' ,(elementView) => {

            if (this.isWorkflowElement(elementView.model)) {
                this.selectedElement = elementView.model
                var position = this.selectedElement.attributes.position

                this.selectedElement.toFront()
                this.showContextButton(this.selectedElement)
                this.translateContextButton(this.selectedElement, position.x, position.y)
                this.embedContextButtonTo(this.selectedElement)
            }
        })
        
        this.paper.on('element:pointerclick', (elementView) => {

            // Saves structure to JSON
            this.selectedJsonButton = elementView.model

            if (this.selectedJsonButton.attributes.type == 'standard.Rectangle') {
                this.graph.set('graphCustomProperty', true)
                this.graph.set('graphExportTime', Date.now())
                this.graph.set('Condition', {
                    name: 'Bastien'
                })
                var jsonObject = this.graph.toJSON()
                var jsonString = JSON.stringify(jsonObject)
            }

            if (this.selectedJsonButton.attributes.type == 'standard.Circle') {
                this.graph.get('graphCustomProperty')
                this.graph.get('graphExportTime')
                this.graph.get('Condition')

                console.log(jsonObject)
                // this.graph.fromJSON(JSON.parse(jsonString))
            }

            // Creates a workflow element
            if (this.isWorkflowElement(elementView.model)) {
                
                this.selectedElement = elementView.model
                var position = this.selectedElement.attributes.position
                console.log(this.graph.getCell('actionButton'))

                this.showElementModal(this.selectedElement)
            }

            else {
                var newElement = null
                var position = this.selectedElement.attributes.position
                var newPositionX = position.x
                var newPositionY = position.y + 200
                switch (elementView.model.attributes.type) {
                    case 'context.ActionButton':
                    newElement = this.addActionElement(newPositionX, newPositionY)
                    $('#actionModal').modal('show')
                        break

                    case 'context.ConditionButton':
                    newElement = this.addConditionElement(newPositionX, newPositionY)
                    $('#conditionModal').modal('show')
                        break

                    case 'context.ValueConditionButton':
                    newElement = this.addValueConditionElement(newPositionX, newPositionY)
                    $('#valueConditionModal').modal('show')
                        break

                    case 'context.DeleteButton':
                    this.unembedContextButton(this.selectedElement)
                    this.selectedElement.remove()
                        break
                }

                if (newElement !== null) {
                    // Add a link between the source element and the new one
                    this.addLink(this.selectedElement, newElement)
                }

                this.hideContextButton()
            }
            console.log(this.selectedElement)
            
        })
        
        // Hides contextual buttons
        this.paper.on('blank:pointerclick', (elementView) => {
            this.selectedElement = null
            this.hideContextButton()

            console.log(this.selectedElement)
        })
    }

    /**
     * Determines if selectedElement is part of the workflow or a menu button, and shows the related modal
     * @param {Element} element 
     */
    isWorkflowElement(element) {
        var isWorkflowElement = false
        switch (element.attributes.type) {
            case 'erd.Derived': // Start
                isWorkflowElement = true
                break

            case 'erd.Entity': // Action
                isWorkflowElement = true
                break

            case 'erd.Relationship': // Condition
                isWorkflowElement = true
                break

            case 'erd.IdentifyingRelationship': // Value Condition
                isWorkflowElement = true
                break
        }

        return isWorkflowElement
    }
    
    /**
     * Enables the visibility and pointerEvents attributes of an element
     * @param {Element} element
     */
    showElement(element){
        element.attr('root/visibility', 'visible')
        element.attr('body/style/pointer-events', 'auto') // TODO : Doesn't work
    }

    /**
     * Disables the visibility and pointerEvents attributes of an element
     * @param {Element} element
     */
    hideElement(element) {
        element.attr('root/visibility', 'hidden')
        element.attr('body/style/pointer-events', 'none')
    }

    /**
     * Shows all contextual buttons except for deleteButton if selectedElement is Start
     * @param {Element} element
     */
    showContextButton(element) {
        if (element.attributes.type != 'erd.Derived') {
            this.showElement(this.graph.getCell('deleteButton'))
            this.graph.getCell('deleteButton').toFront()
        }

        else if (this.graph.getCell('deleteButton').attr('root/visibility')) {
            // this.hideElement(this.graph.getCell('deleteButton'))
        }

        this.showElement(this.graph.getCell('actionButton'))
        this.showElement(this.graph.getCell('conditionButton'))
        this.showElement(this.graph.getCell('valueConditionButton'))

        this.graph.getCell('actionButton').toFront()
        this.graph.getCell('conditionButton').toFront()
        this.graph.getCell('valueConditionButton').toFront()
    }
    
    hideContextButton() {
        this.hideElement(this.graph.getCell('actionButton'))
        this.hideElement(this.graph.getCell('conditionButton'))
        this.hideElement(this.graph.getCell('valueConditionButton'))
        this.hideElement(this.graph.getCell('deleteButton'))
    }

    embedContextButtonTo(element) {
        element.embed(this.graph.getCell('actionButton'))
        element.embed(this.graph.getCell('conditionButton'))
        element.embed(this.graph.getCell('valueConditionButton'))
        element.embed(this.graph.getCell('deleteButton'))
    }

    /**
     * Unembeds contextButtons from its parent to avoid suppression
     * @param {Element} element 
     */
    unembedContextButton(element) {
        element.unembed(this.graph.getCell('actionButton'))
        element.unembed(this.graph.getCell('conditionButton'))
        element.unembed(this.graph.getCell('valueConditionButton'))
        element.unembed(this.graph.getCell('deleteButton'))
    }

    /**
     * Changes the contextual buttons position related to selectedElement
     * @param {Element} element 
     * @param {int} x 
     * @param {int} y 
     */
    translateContextButton(element, x, y) {
        switch (element.attributes.type) {
            case 'erd.Derived': // Start
            this.graph.getCell('actionButton').position(x + 100, y - 30)
            this.graph.getCell('conditionButton').position(x + 100, y + 50)
            this.graph.getCell('valueConditionButton').position(x - 30, y + 50)
            this.graph.getCell('deleteButton').position(x - 50, y - 30)
                break;

            case 'erd.Entity': // Action
            this.graph.getCell('actionButton').position(x + 120, y - 30)
            this.graph.getCell('conditionButton').position(x + 120, y + 40)
            this.graph.getCell('valueConditionButton').position(x - 30, y + 40)
            this.graph.getCell('deleteButton').position(x - 30, y - 30)
                break;

            case 'erd.Relationship': // Condition
            this.graph.getCell('actionButton').position(x + 120, y - 30)
            this.graph.getCell('conditionButton').position(x + 120, y + 120)
            this.graph.getCell('valueConditionButton').position(x - 30, y + 120)
            this.graph.getCell('deleteButton').position(x - 30, y - 30)
                break;

            case 'erd.IdentifyingRelationship': //Value condition
            this.graph.getCell('actionButton').position(x + 120, y - 30)
            this.graph.getCell('conditionButton').position(x + 120, y + 120)
            this.graph.getCell('valueConditionButton').position(x - 30, y + 120)
            this.graph.getCell('deleteButton').position(x - 30, y - 30)
                break;
        }
    }

    /**
     * Shows one type of modal depending of the type of selectedElement
     * @param {Element} element
     */
    showElementModal(element) {
        switch (element.attributes.type) {
            case 'erd.Derived': // Start
                break

            case 'erd.Entity': // Action
                $('#actionModal').modal('show')
                break

            case 'erd.Relationship': // Condition
                $('#conditionModal').modal('show')
                break

            case 'erd.IdentifyingRelationship': // Value Condition
                $('#valueConditionModal').modal('show')
                break
        }
    }
}