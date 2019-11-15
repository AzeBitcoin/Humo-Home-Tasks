function sum(a = 0) {
        var sum = a;

        function f(b = 0) {
          sum += b;
          return f;
        }

        f.toString = function() {
            return sum;
        }
        return f;
      }

      var a = sum(2)(1)()()(23)()();
      console.log(a);
