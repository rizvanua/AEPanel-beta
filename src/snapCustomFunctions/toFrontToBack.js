Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype;
    elproto.toFront = function () {
        this.appendTo(this.paper);
    };
    elproto.toBack = function () {
        this.prependTo(this.paper);
    };
});
