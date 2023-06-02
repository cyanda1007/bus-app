// Helper function to calculate cost based on destination and travel time
function calculateCost(destination, travelTime) {
  const destinations = {
      Khayelitsha: { cost: 40, increase: 0.25 },
      Dunoon: { cost: 25, increase: 0.25 },
      "Mitchells Plain": { cost: 30, increase: 0.25 }
  };

  const destinationInfo = destinations[destination];
  const cost = destinationInfo.cost;

  if (travelTime === "peak") {
      const increasePercentage = destinationInfo.increase;
      const increasedCost = cost + cost * increasePercentage;
      return increasedCost;
  }

  return cost;
}

// Function to calculate and display the bus travel information
function calculateBusTravel() {
  const pointsInput = document.getElementById("points");
  const destinationSelect = document.getElementById("destination");
  const travelTimeSelect = document.getElementById("travel-time");
  const returnTripCheckbox = document.getElementById("return-trip");
  const costPerTripOutput = document.getElementById("cost-per-trip");
  const totalTripsOutput = document.getElementById("total-trips");
  const returnTripsOutput = document.getElementById("return-trips");
  const costPerReturnTripOutput = document.getElementById("cost-per-return-trip");
  const pricePerTripOutput = document.getElementById("price-per-trip");

  const points = parseInt(pointsInput.value);
  const destination = destinationSelect.value;
  const travelTime = travelTimeSelect.value;
  const isReturnTrip = returnTripCheckbox.checked;

  const costPerTrip = calculateCost(destination, travelTime);
  const totalTrips = Math.floor(points / costPerTrip);
  const returnTrips = isReturnTrip ? Math.floor(totalTrips / 2) : 0;
  const costPerReturnTrip = isReturnTrip ? costPerTrip * 2 : 0;
  const pricePerTrip = isReturnTrip ? costPerTrip + costPerReturnTrip : costPerTrip;

  costPerTripOutput.textContent = `Cost per trip: R${costPerTrip.toFixed(2)}`;
  totalTripsOutput.textContent = `Total trips: ${totalTrips}`;
  returnTripsOutput.textContent = `Return trips: ${returnTrips}`;
  costPerReturnTripOutput.textContent = `Cost per return trip: R${costPerReturnTrip.toFixed(2)}`;
  pricePerTripOutput.textContent = `Price per trip: R${pricePerTrip.toFixed(2)}`;
}

// Event listener for the calculate button
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculateBusTravel);
