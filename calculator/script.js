const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.dataset.value;

        if (value === "AC") {
            display.value = "";
        }

        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        else if (value === "=") {
            try {
                if (display.value.trim() === "") {
                    return;
                }

                const expression = display.value;

                if (!/^[0-9+\-*/%.()\s]+$/.test(expression)) {
                    throw new Error("Invalid expression");
                }

                const result = Function(
                    '"use strict"; return (' + expression + ')'
                )();

                if (!Number.isFinite(result)) {
                    throw new Error("Invalid calculation");
                }

                display.value = result;

            } catch {
                display.value = "Error";
            }
        }

        else {
            if (display.value === "Error") {
                display.value = "";
            }

            display.value += value;
        }

    });

});

