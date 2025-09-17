   // --- Movement and Animation Variables ---
    // Horizontal movement
    let currentOffsetX = 0;
    let targetOffsetX = 0;
    let intermediateTargetX = 0;
    const maxPupilOffsetLeft = 80;
    const maxPupilOffsetRight = 80;

    // Vertical movement
    let currentOffsetY = 0;
    let targetOffsetY = 0;
    let intermediateTargetY = 0;
    const maxPupilOffsetUp = 60;
    const maxPupilOffsetDown = 40; // Example of a different constraint

    // The percentage to overshoot the target for animation fx. 1.2 means 20% farther.
    const overshootAmount = 1.2;

    let eyeStyles = [drawAnimeEye, drawSleepyEye, drawAngryEye, drawMonsterEye, drawCuteEye, drawRobotEye, drawSurprisedEye, basicEye, drawEyeClassicCartoon,drawEyeAnime,drawEyeGoogly,drawEyeSimpleDot,drawEyeLashes]; // Array of eye drawing functions
    let drawEye = basicEye; // Default eye drawing function

    function setup() {
        // Create a canvas with an 800x600 resolution.
        createCanvas(800, 600);
        
    }

    function draw() {
        // Set a light background color.
        background(245, 230, 230);

        // --- Lerp-based Animation Calculation (Horizontal) ---
        intermediateTargetX = lerp(intermediateTargetX, targetOffsetX, 0.1);
        currentOffsetX = lerp(currentOffsetX, intermediateTargetX, 0.15);

        // --- Lerp-based Animation Calculation (Vertical) ---
        intermediateTargetY = lerp(intermediateTargetY, targetOffsetY, 0.1);
        currentOffsetY = lerp(currentOffsetY, intermediateTargetY, 0.15);

        // Define the center points for the left and right eyes.
        const leftEyeX = width / 2 - 160;
        const rightEyeX = width / 2 + 160;
        const eyeY = height / 2;

        // Draw both eyes, passing the calculated offsets to our function.
        drawEye(leftEyeX, eyeY, currentOffsetX, currentOffsetY);
        drawEye(rightEyeX, eyeY, currentOffsetX, currentOffsetY);
    }

    /**
     * A custom function to draw a single stylized anime eye.
     * @param {number} x - The horizontal center of the eye.
     * @param {number} y - The vertical center of the eye.
     * @param {number} offsetX - The current horizontal offset for the iris and pupil.
     * @param {number} offsetY - The current vertical offset for the iris and pupil.
     */
    function basicEye(x, y, offsetX, offsetY) {
        // --- 1. Draw the sclera (the white background of the eye) ---
        // We create a filled shape that matches the outline of the eye.
        push();
        fill(255);
        noStroke();
        beginShape();
        // Approximate the top arc with vertices
        for (let angle = PI; angle <= TWO_PI; angle += 0.01) {
            vertex(x + cos(angle) * 150, y + sin(angle) * 125);
        }
        // Approximate the bottom arc with vertices
        for (let angle = 0; angle <= PI; angle += 0.01) {
            vertex(x + cos(angle) * 150, y + sin(angle) * 75);
        }
        endShape(CLOSE);
        pop();

        // --- 2. Apply clipping mask and draw the moving parts ---
        push();
        // Save the current canvas drawing context.
        drawingContext.save();

        // Define the clipping path. Nothing drawn after .clip() will appear outside this path.
        drawingContext.beginPath();
        // The path is created from two elliptical arcs to match the eye shape.
        drawingContext.ellipse(x, y, 150, 125, 0, PI, TWO_PI); // Top half
        drawingContext.ellipse(x, y, 150, 75, 0, 0, PI);      // Bottom half
        drawingContext.closePath();
        drawingContext.clip();

        // Draw the iris and pupil. These will be clipped by the path above.
        noStroke();
        fill(60, 120, 220); // Dark blue
        ellipse(x + offsetX, y + offsetY, 160, 160);
        fill(100, 180, 255); // Light blue
        ellipse(x + offsetX, y + offsetY, 130, 130);
        fill(0); // Black pupil
        ellipse(x + offsetX, y + offsetY, 60, 75);

        // Restore the drawing context to remove the clipping mask.
        drawingContext.restore();
        pop();

        // --- 3. Draw the outline and highlights on top of everything ---
        // Eye Outline
        push();
        noFill();
        stroke(0);
        strokeWeight(8);
        arc(x, y, 300, 250, PI, TWO_PI);
        arc(x, y, 300, 150, 0, PI);
        pop();

        // Highlights (not clipped)
        fill(255, 255, 255, 220);
        noStroke();
        ellipse(x - 40, y - 30, 50, 50);
        ellipse(x + 50, y + 45, 25, 25);
    }

    /**
     * This function is called once every time a key is pressed.
     * It sets the target for the eye movement.
     */
    function keyPressed() {
        if (keyCode === LEFT_ARROW) {
            targetOffsetX = -maxPupilOffsetLeft;
            intermediateTargetX = targetOffsetX * overshootAmount;
        } else if (keyCode === RIGHT_ARROW) {
            targetOffsetX = maxPupilOffsetRight;
            intermediateTargetX = targetOffsetX * overshootAmount;
        } else if (keyCode === UP_ARROW) {
            targetOffsetY = -maxPupilOffsetUp;
            intermediateTargetY = targetOffsetY * overshootAmount;
        } else if (keyCode === DOWN_ARROW) {
            targetOffsetY = maxPupilOffsetDown;
            intermediateTargetY = targetOffsetY * overshootAmount;
        } else if (key === ' ') { // Check if the space bar is pressed
            targetOffsetX = 0;
            targetOffsetY = 0;
            // We don't need to set the intermediate targets here,
            // the lerp in draw() will handle the smooth return.
        }
    }

    function mousePressed() {
        // Cycle through eye styles
        let currentIndex = eyeStyles.indexOf(drawEye);
        let nextIndex = (currentIndex + 1) % eyeStyles.length;
        drawEye = eyeStyles[nextIndex];
    }