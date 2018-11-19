import joint from 'jointjs'

export class Edit {
    constructor() {
        this.initJointJs()
    }

    initJointJs() {
        var graph = new joint.dia.Graph;

        var paper = new joint.dia.Paper({
            el: document.getElementById('paper'),
            model: graph,
            width: '100%',
            height: 800,
            gridSize: 10,
            drawGrid: true
        });

        var rect = new joint.shapes.standard.Rectangle();
        rect.position(100, 30);
        rect.resize(100, 40);
        rect.attr({
            body: {
                fill: 'red'
            },
            label: {
                text: 'Hello',
                fill: 'white'
            }
        });
        rect.addTo(graph);

        var rect2 = rect.clone();
        rect2.translate(300, 0);
        rect2.attr('label/text', 'World!');
        rect2.attr('body/fill', 'blue');
        rect2.addTo(graph);

        var link = new joint.shapes.standard.Link();
        link.source(rect);
        link.target(rect2);
        link.addTo(graph);
    }
}