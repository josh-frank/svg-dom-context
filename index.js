class SvgDomContext {

    static __SVG_NAMESPACE = "http://www.w3.org/2000/svg";

    constructor() {

        const setDimensions = () => {
            this.height = window.innerHeight || document.body.clientHeight;
            this.width = window.innerWidth || document.body.clientWidth;
            this.svgElement.setAttributeNS( null, "width", this.width );
            this.svgElement.setAttributeNS( null, "height", this.height );
            this.svgElement.setAttributeNS( null, "viewBox", `0 0 ${ this.width } ${ this.height }` );
        }

        [ this.mouse, this.mouseDown ] = [ null, null ];

        this.svgElement = document.createElementNS( SvgDomContext.__SVG_NAMESPACE, "svg" );
        setDimensions();
        this.svgElement.style.position = "absolute";
        [ this.svgElement.style.top, this.svgElement.style.left, this.svgElement.style.zIndex ] = [ 0, 0, 0 ];
        this.svgElement.innerHTML = "Inline SVG not supported";

        document.querySelector( "body" ).appendChild( this.svgElement );
        window.addEventListener( "resize", setDimensions );

        window.addEventListener( "mousemove", mouseMoveEvent => this.mouse = mouseMoveEvent );
        window.addEventListener( "mousedown", mouseDownEvent => this.mouse = mouseDownEvent );
        window.addEventListener( "mouseup", () => this.mouse = null );

    }

}
