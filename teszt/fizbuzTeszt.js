QUnit.module('fizbuz', function() {
    
    QUnit.test('létezik e', function(assert) {
      assert.ok(fizbuz, "Létezik e fizbut? ");
    });
    QUnit.test('fuggveny e', function(assert) {
        assert.ok(typeof(fizbuz) === "function", "Létezik e fizbut? ");
    });

    QUnit.test('fizbuz(0)', function(assert) {
        assert.equal(fizbuz(15), "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz");
    });
    
    
    QUnit.test('fizbuzzErtek() [1,2,4,7,8,11,13,14]', function(assert) {
        const nemOszthato = [1,2,4,7,8,11,13,14]
        for (let index = 0; index < nemOszthato.length; index++) {
            assert.equal(fizbuzzErtek(nemOszthato[index]), nemOszthato[index]);
        }
    });
    QUnit.test('fizbuzzErtek() [3,6,9,12]', function(assert) {
        const harommalOszthato = [3,6,9,12]
        for (let index = 0; index < harommalOszthato.length; index++) {
            assert.equal(fizbuzzErtek(harommalOszthato[index]), "fizz");
        }
    });
    QUnit.test('fizbuzzErtek() [5,10]', function(assert) {
        const ottelOszthato = [5,10]
        for (let index = 0; index < ottelOszthato.length; index++) {
            assert.equal(fizbuzzErtek(ottelOszthato[index]), "buzz");
        }
    });
    QUnit.test('fizbuzzErtek() [15]', function(assert) {
        const haromOtOszthato = [15]
        for (let index = 0; index < haromOtOszthato.length; index++) {
            assert.equal(fizbuzzErtek(haromOtOszthato[index]), "fizzbuzz");
        }
    });
    
    
  });