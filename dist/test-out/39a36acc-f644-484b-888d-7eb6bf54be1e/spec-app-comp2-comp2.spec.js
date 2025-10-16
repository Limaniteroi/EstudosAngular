import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-EGWVFIOG.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/comp2/comp2.html
var comp2_default;
var init_comp2 = __esm({
  "angular:jit:template:src/app/comp2/comp2.html"() {
    comp2_default = "<p>comp2 works!</p>\n";
  }
});

// angular:jit:style:src/app/comp2/comp2.scss
var comp2_default2;
var init_comp22 = __esm({
  "angular:jit:style:src/app/comp2/comp2.scss"() {
    comp2_default2 = "/* src/app/comp2/comp2.scss */\n/*# sourceMappingURL=comp2.css.map */\n";
  }
});

// src/app/comp2/comp2.ts
var Comp2;
var init_comp23 = __esm({
  "src/app/comp2/comp2.ts"() {
    "use strict";
    init_tslib_es6();
    init_comp2();
    init_comp22();
    init_core();
    Comp2 = class Comp22 {
    };
    Comp2 = __decorate([
      Component({
        selector: "app-comp2",
        imports: [],
        template: comp2_default,
        styles: [comp2_default2]
      })
    ], Comp2);
  }
});

// src/app/comp2/comp2.spec.ts
var require_comp2_spec = __commonJS({
  "src/app/comp2/comp2.spec.ts"(exports) {
    init_testing();
    init_comp23();
    describe("Comp2", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Comp2]
        }).compileComponents();
        fixture = TestBed.createComponent(Comp2);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_comp2_spec();
//# sourceMappingURL=spec-app-comp2-comp2.spec.js.map
