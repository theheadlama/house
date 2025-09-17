// 1. Big Anime-Style Eyes
function drawAnimeEye(x, y, offsetX, offsetY) {
  // Large round sclera
  push();
  fill(255);
  noStroke();
  ellipse(x, y, 220, 200);
  pop();
  
  // Clipping mask
  push();
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.arc(x, y, 110, 0, TWO_PI);
  drawingContext.closePath();
  drawingContext.clip();
  
  // Large colorful iris
  noStroke();
  fill(255, 100, 150); // Pink
  ellipse(x + offsetX, y + offsetY, 140, 140);
  fill(255, 150, 200); // Lighter pink
  ellipse(x + offsetX, y + offsetY, 100, 100);
  fill(0); // Black pupil
  ellipse(x + offsetX, y + offsetY, 40, 40);
  
  drawingContext.restore();
  pop();
  
  // Thick outline
  push();
  noFill();
  stroke(0);
  strokeWeight(6);
  ellipse(x, y, 220, 200);
  pop();
  
  // Large sparkly highlights
  fill(255, 255, 255, 200);
  noStroke();
  ellipse(x - 30, y - 40, 60, 60);
  ellipse(x + 40, y + 20, 20, 20);
  ellipse(x - 50, y + 30, 15, 15);
}

// 2. Sleepy/Droopy Eyes
function drawSleepyEye(x, y, offsetX, offsetY) {
  // Droopy sclera shape
  push();
  fill(255);
  noStroke();
  beginShape();
  // Top arc (flattened)
  for (let angle = PI * 0.8; angle <= TWO_PI * 0.2; angle += 0.01) {
    vertex(x + cos(angle) * 140, y + sin(angle) * 60 - 20);
  }
  // Bottom arc (droopy)
  for (let angle = 0; angle <= PI; angle += 0.01) {
    vertex(x + cos(angle) * 140, y + sin(angle) * 90 + 10);
  }
  endShape(CLOSE);
  pop();
  
  // Clipping mask for droopy shape
  push();
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.ellipse(x, y - 10, 140, 60, 0, PI * 0.8, TWO_PI * 0.2);
  drawingContext.ellipse(x, y + 10, 140, 90, 0, 0, PI);
  drawingContext.closePath();
  drawingContext.clip();
  
  // Sleepy iris (partially hidden)
  noStroke();
  fill(120, 80, 200); // Purple
  ellipse(x + offsetX, y + offsetY + 15, 100, 100);
  fill(0); // Small pupil
  ellipse(x + offsetX, y + offsetY + 15, 30, 30);
  
  drawingContext.restore();
  pop();
  
  // Droopy outline
  push();
  noFill();
  stroke(0);
  strokeWeight(6);
  beginShape();
  for (let angle = PI * 0.8; angle <= TWO_PI * 0.2; angle += 0.01) {
    vertex(x + cos(angle) * 140, y + sin(angle) * 60 - 20);
  }
  for (let angle = 0; angle <= PI; angle += 0.01) {
    vertex(x + cos(angle) * 140, y + sin(angle) * 90 + 10);
  }
  endShape();
  pop();
  
  // Sleepy highlight
  fill(255, 255, 255, 150);
  noStroke();
  ellipse(x - 25, y - 10, 30, 30);
}

// 3. Angry Eyes
function drawAngryEye(x, y, offsetX, offsetY) {
  // Angular sclera
  push();
  fill(255);
  noStroke();
  beginShape();
  vertex(x - 120, y);
  vertex(x - 60, y - 80);
  vertex(x + 60, y - 60);
  vertex(x + 120, y);
  vertex(x + 80, y + 70);
  vertex(x - 80, y + 70);
  endShape(CLOSE);
  pop();
  
  // Angular clipping mask
  push();
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.moveTo(x - 120, y);
  drawingContext.lineTo(x - 60, y - 80);
  drawingContext.lineTo(x + 60, y - 60);
  drawingContext.lineTo(x + 120, y);
  drawingContext.lineTo(x + 80, y + 70);
  drawingContext.lineTo(x - 80, y + 70);
  drawingContext.closePath();
  drawingContext.clip();
  
  // Fiery iris
  noStroke();
  fill(220, 50, 20); // Red
  ellipse(x + offsetX, y + offsetY, 120, 120);
  fill(255, 100, 50); // Orange
  ellipse(x + offsetX, y + offsetY, 80, 80);
  fill(0); // Pupil
  ellipse(x + offsetX, y + offsetY, 25, 35);
  
  drawingContext.restore();
  pop();
  
  // Angry outline with heavy brow
  push();
  noFill();
  stroke(0);
  strokeWeight(8);
  beginShape();
  vertex(x - 120, y);
  vertex(x - 60, y - 80);
  vertex(x + 60, y - 60);
  vertex(x + 120, y);
  vertex(x + 80, y + 70);
  vertex(x - 80, y + 70);
  endShape(CLOSE);
  
  // Heavy angry brow
  strokeWeight(12);
  line(x - 130, y - 90, x + 70, y - 70);
  pop();
  
  // Minimal highlight
  fill(255, 200, 200, 100);
  noStroke();
  ellipse(x - 20, y - 20, 15, 15);
}

// 4. Surprised/Wide Eyes
function drawSurprisedEye(x, y, offsetX, offsetY) {
  // Perfect circle sclera
  push();
  fill(255);
  noStroke();
  ellipse(x, y, 250, 250);
  pop();
  
  // Circular clipping mask
  push();
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.arc(x, y, 125, 0, TWO_PI);
  drawingContext.closePath();
  drawingContext.clip();
  
  // Large iris filling most of the eye
  noStroke();
  fill(50, 200, 100); // Green
  ellipse(x + offsetX, y + offsetY, 180, 180);
  fill(100, 255, 150); // Light green
  ellipse(x + offsetX, y + offsetY, 120, 120);
  fill(0); // Large pupil
  ellipse(x + offsetX, y + offsetY, 80, 80);
  
  drawingContext.restore();
  pop();
  
  // Thick surprised outline
  push();
  noFill();
  stroke(0);
  strokeWeight(8);
  ellipse(x, y, 250, 250);
  pop();
  
  // Multiple highlights for shock effect
  fill(255, 255, 255, 220);
  noStroke();
  ellipse(x - 40, y - 50, 45, 45);
  ellipse(x + 30, y - 30, 25, 25);
  ellipse(x - 20, y + 40, 20, 20);
  ellipse(x + 50, y + 20, 15, 15);
}

// 5. Cute Rounded Eyes
function drawCuteEye(x, y, offsetX, offsetY) {
  // Soft rounded sclera
  push();
  fill(255);
  noStroke();
  ellipse(x, y, 180, 160);
  pop();
  
  // Rounded clipping mask
  push();
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.ellipse(x, y, 180, 160, 0, 0, TWO_PI);
  drawingContext.closePath();
  drawingContext.clip();
  
  // Cute colored iris
  noStroke();
  fill(150, 100, 200); // Lavender
  ellipse(x + offsetX, y + offsetY, 110, 110);
  fill(200, 150, 255); // Light lavender
  ellipse(x + offsetX, y + offsetY, 70, 70);
  fill(0); // Round pupil
  ellipse(x + offsetX, y + offsetY, 35, 35);
  
  drawingContext.restore();
  pop();
  
  // Soft outline
  push();
  noFill();
  stroke(0);
  strokeWeight(5);
  ellipse(x, y, 180, 160);
  pop();
  
  // Heart-shaped highlight
  fill(255, 255, 255, 200);
  noStroke();
  push();
  translate(x - 25, y - 25);
  beginShape();
  vertex(0, 10);
  bezierVertex(-10, 0, -20, 0, -15, 15);
  bezierVertex(-10, 20, 0, 25, 0, 10);
  bezierVertex(0, 25, 10, 20, 15, 15);
  bezierVertex(20, 0, 10, 0, 0, 10);
  endShape(CLOSE);
  pop();
}

// 6. Robot/Mechanical Eyes
function drawRobotEye(x, y, offsetX, offsetY) {
  // Hexagonal sclera
  push();
  fill(220, 220, 220);
  stroke(0);
  strokeWeight(4);
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    vertex(x + cos(angle) * 100, y + sin(angle) * 100);
  }
  endShape(CLOSE);
  pop();
  
  // Hexagonal clipping mask
  push();
  drawingContext.save();
  drawingContext.beginPath();
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    if (i === 0) {
      drawingContext.moveTo(x + cos(angle) * 100, y + sin(angle) * 100);
    } else {
      drawingContext.lineTo(x + cos(angle) * 100, y + sin(angle) * 100);
    }
  }
  drawingContext.closePath();
  drawingContext.clip();
  
  // Digital iris with grid pattern
  noStroke();
  fill(0, 255, 255); // Cyan
  ellipse(x + offsetX, y + offsetY, 120, 120);
  
  // Grid pattern
  stroke(0, 200, 200);
  strokeWeight(2);
  for (let i = -60; i <= 60; i += 20) {
    line(x + offsetX - 60, y + offsetY + i, x + offsetX + 60, y + offsetY + i);
    line(x + offsetX + i, y + offsetY - 60, x + offsetX + i, y + offsetY + 60);
  }
  
  // Digital pupil
  noStroke();
  fill(0);
  ellipse(x + offsetX, y + offsetY, 30, 30);
  
  drawingContext.restore();
  pop();
  
  // Mechanical details
  push();
  noFill();
  stroke(100);
  strokeWeight(3);
  // Corner brackets
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    let cornerX = x + cos(angle) * 100;
    let cornerY = y + sin(angle) * 100;
    ellipse(cornerX, cornerY, 8, 8);
  }
  pop();
  
  // LED highlight
  fill(255, 255, 255, 255);
  noStroke();
  rect(x - 30, y - 30, 15, 15);
}

// 7. Monster Eyes
function drawMonsterEye(x, y, offsetX, offsetY) {
  // Irregular sclera with bloodshot effect
  push();
  fill(255, 250, 245);
  noStroke();
  beginShape();
  vertex(x - 140, y + 10);
  vertex(x - 100, y - 90);
  vertex(x - 20, y - 100);
  vertex(x + 80, y - 70);
  vertex(x + 130, y + 20);
  vertex(x + 90, y + 80);
  vertex(x + 10, y + 100);
  vertex(x - 80, y + 85);
  endShape(CLOSE);
  pop();
  
  // Irregular clipping mask
  push();
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.moveTo(x - 140, y + 10);
  drawingContext.lineTo(x - 100, y - 90);
  drawingContext.lineTo(x - 20, y - 100);
  drawingContext.lineTo(x + 80, y - 70);
  drawingContext.lineTo(x + 130, y + 20);
  drawingContext.lineTo(x + 90, y + 80);
  drawingContext.lineTo(x + 10, y + 100);
  drawingContext.lineTo(x - 80, y + 85);
  drawingContext.closePath();
  drawingContext.clip();
  
  // Creepy iris
  noStroke();
  fill(200, 200, 0); // Yellow
  ellipse(x + offsetX, y + offsetY, 140, 140);
  fill(255, 255, 100); // Light yellow
  ellipse(x + offsetX, y + offsetY, 90, 90);
  fill(0); // Slit pupil
  ellipse(x + offsetX, y + offsetY, 15, 60);
  
  drawingContext.restore();
  pop();
  
  // Bloodshot veins
  push();
  stroke(255, 0, 0, 150);
  strokeWeight(2);
  // Random vein patterns
  line(x - 80, y - 40, x + 60, y - 20);
  line(x - 60, y + 30, x + 80, y + 50);
  line(x - 100, y, x - 20, y - 60);
  line(x + 20, y + 70, x + 90, y - 30);
  pop();
  
  // Jagged outline
  push();
  noFill();
  stroke(0);
  strokeWeight(6);
  beginShape();
  vertex(x - 140, y + 10);
  vertex(x - 100, y - 90);
  vertex(x - 20, y - 100);
  vertex(x + 80, y - 70);
  vertex(x + 130, y + 20);
  vertex(x + 90, y + 80);
  vertex(x + 10, y + 100);
  vertex(x - 80, y + 85);
  endShape(CLOSE);
  pop();
  
  // Eerie glow
  fill(200, 200, 0, 50);
  noStroke();
  ellipse(x - 20, y - 30, 30, 30);
}

// 8. Winking Eye
function drawWinkingEye(x, y, offsetX, offsetY) {
  // Curved line for closed eye
  push();
  noFill();
  stroke(0);
  strokeWeight(8);
  
  // Create a curved winking shape
  beginShape();
  vertex(x - 100, y + 10);
  bezierVertex(x - 50, y - 30, x + 50, y - 30, x + 100, y + 10);
  endShape();
  
  // Add some eyelashes
  strokeWeight(4);
  for (let i = 0; i < 5; i++) {
    let lashX = x - 80 + i * 40;
    let lashY = y - 15 + sin(i) * 10;
    line(lashX, lashY, lashX + random(-10, 10), lashY - 20);
  }
  pop();
  
  // Add a cute blush mark
  fill(255, 150, 150, 100);
  noStroke();
  ellipse(x + 120, y + 30, 40, 25);
}


function drawEyeClassicCartoon(x, y, offsetX, offsetY) {
push();
fill(255);
stroke(0);
strokeWeight(4);
ellipse(x, y, 150, 150); // Sclera

fill(0);
ellipse(x + offsetX, y + offsetY, 50, 50); // Pupil
pop();
}

// A highly stylized anime eye with large, layered highlights.
function drawEyeAnime(x, y, offsetX, offsetY) {
// Sclera and outline
push();
fill(255);
stroke(0);
strokeWeight(6);
ellipse(x, y, 200, 170);

// Iris
noStroke();
fill(0, 100, 200); // Dark blue iris
ellipse(x + offsetX, y + offsetY, 120, 120);
fill(0, 150, 255); // Light blue iris
ellipse(x + offsetX, y + offsetY, 80, 80);

// Pupil
fill(0); // Black pupil
ellipse(x + offsetX, y + offsetY, 50, 50);

// Highlights (not clipped)
fill(255, 255, 255);
ellipse(x + offsetX - 30, y + offsetY - 30, 40, 40); // Large highlight
ellipse(x + offsetX + 20, y + offsetY + 20, 15, 15);  // Small highlight
pop();
}

// A googly eye style with a black outline and a solid pupil.
function drawEyeGoogly(x, y, offsetX, offsetY) {
// Sclera and outline
push();
fill(255);
stroke(0);
strokeWeight(6);
ellipse(x, y, 180, 180);

// Pupil (black circle)
noStroke();
fill(0);
ellipse(x + offsetX, y + offsetY, 60, 60);

// Tiny highlight for a glossy look
fill(255, 255, 255, 200);
ellipse(x + offsetX - 15, y + offsetY - 15, 10, 10);
pop();
}

// A very simple, minimalist style with just a dot.
function drawEyeSimpleDot(x, y, offsetX, offsetY) {
push();
noStroke();
fill(0);
// This eye is small and the pupil doesn't need to move much.
ellipse(x + offsetX * 0.5, y + offsetY * 0.5, 30, 30);
pop();
}

// A layered, detailed eye with thick lashes.
function drawEyeLashes(x, y, offsetX, offsetY) {
push();
// Sclera
fill(255);
noStroke();
ellipse(x, y, 200, 190);

// Iris (layered for a gradient effect)
noStroke();
fill(25, 120, 180); // Darker blue base
ellipse(x + offsetX, y + offsetY, 150, 150);
fill(80, 180, 255); // Brighter blue center
ellipse(x + offsetX, y + offsetY, 120, 120);

// Pupil
fill(0);
ellipse(x + offsetX, y + offsetY, 70, 70);

// Highlights
fill(255);
ellipse(x + offsetX - 45, y + offsetY - 45, 50, 50);
ellipse(x + offsetX + 30, y + offsetY + 30, 20, 20);

// Outline and lashes
noFill();
stroke(0);
strokeWeight(6);
ellipse(x, y, 200, 190);

// Top lashes (simple lines)
for (let i = -60; i <= 60; i += 15) {
    line(x + i, y - 80, x + i * 1.5, y - 100);
}

// Bottom lashes (simple lines)
for (let i = -50; i <= 50; i += 20) {
    line(x + i, y + 80, x + i * 1.1, y + 100);
}

pop();
}