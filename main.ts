/*
 * This program calculates board feet
 *
 * By: Mohamad T
 * Version: 1.0
 * Since: 2024-10-2
 */

import { createPrompt } from 'bun-promptx'

// Function to calculate the length of a board foot
function calcBoardFoot(width, height) {
  // Variables
  const BOARD_FOOT_VOLUME = 144

  // Calculate
  const length = BOARD_FOOT_VOLUME / (width * height)

  return length
}

// Begin program
console.log('This program figures out the length of a wooden board that is'
           + ' 1 board foot in dimension. (1 board foot is 144³ inches of wood)')

// Get width input
const widthStr = createPrompt('Enter the width(inch): ')
const width = widthStr.value

// Verify width input
if (isNaN(width)) {
  console.log('\nInvalid input.')
} else {
  // Get height input
  const heightStr = createPrompt('Enter the height(inch): ')
  const height = heightStr.value

  // Veriy height input
  if (isNaN(height)) {
    console.log('\nInvalid input.')
  } else {
    // Calculate the length
    const length = calcBoardFoot(width, height)

    // Output
    console.log(`\nThe wood should be ${length} inch(es) long.`)
  }
}

// Done
console.log('\nDone.')
