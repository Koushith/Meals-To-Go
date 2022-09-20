// import { mockImages, mocks } from "./mock";
// import camelize from "camelize";

// export const restaurantsRequest = (location = "7.7749295,-122.4194155") => {
//   return new Promise((resolve, reject) => {
//     const mock = mocks[location];
//     if (!mock) {
//       reject("not found");
//     }
//     resolve(mock);
//   });
// };

// /**
//  * transform some data- along with original data- add something new
//  */

// export const restaurantTransform = ({ results = [] }) => {
//   const mappedResults = results.map((restaurant) => {
//     // we dont have photos in our api- so adding this

//     restaurant.photos = restaurant.photos.map((p) => {
//       return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
//     });
//     return {
//       ...restaurant,
//       isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
//       isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
//     };
//   });
//   return camelize(mappedResults);
// };

import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
