function test(a, b) {
    const no = {};
    no.a = a;
    no.b = b;
    console.log(this);
}