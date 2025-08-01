// console.log("connected js.");


//loadCategories

// {
//     "status": true,
//     "message": "successfully fetched all the categories data",
//     "categories": [
//         {
//             "id": 1,
//             "category": "Cat",
//             "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
//         },
//         {
//             "id": 2,
//             "category": "Dog",
//             "category_icon": "https://i.ibb.co.com/c8Yp1y7/dog.png"
//         },
//         {
//             "id": 3,
//             "category": "Rabbit",
//             "category_icon": "https://i.ibb.co.com/3hftmLC/rabbit.png"
//         },
//         {
//             "id": 4,
//             "category": "Bird",
//             "category_icon": "https://i.ibb.co.com/6HHZwfq/bird.png"
//         }
//     ]
// }
const loadCategories = () => {
fetch("https://openapi.programming-hero.com/api/peddy/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories))
  .catch((err) => console.log(err));
}

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach(element => {
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
        <button class="btn w-[312px] lg:w-[300px] md:w-[155px] h-[104px] rounded-xl">
        <div class="flex items-center gap-4">
        <img src="${element.category_icon}" alt="${element.category}" class="h-[56px]">
        <span class="text-2xl font-bold">${element.category}</span>
        </div></button>
        `;

        categoryContainer.append(buttonContainer);
        
    });
}

loadCategories();


// loadPets


// {
//     petId: 1,
//     breed: "Golden Retriever",
//     category: "Dog",
//     date_of_birth: "2023-01-15",
//     price: 1200,
//     image: "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     gender: "Male",
//     pet_details:
//       "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     vaccinated_status: "Fully",
//     pet_name: "Sunny",
//   }

const loadPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => displayPets(data.pets))
      .catch((err) => console.log(err));
}

const displayPets = (pets) =>{
    // console.log(pets);
    const petContainer = document.getElementById("pets");
    pets.forEach(element => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="card w-full bg-base-100 shadow-sm">
  <div class="card-body">
    <span class="badge badge-xs badge-warning">Most Popular</span>
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">Premium</h2>
      <span class="text-xl">$29/mo</span>
    </div>
    <ul class="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
      <li class="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span class="line-through">Seamless cloud integration</span>
      </li>
      <li class="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span class="line-through">Real-time collaboration tools</span>
      </li>
    </ul>
    <div class="mt-6">
      <button class="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
        `;
    petContainer.append(card);
    });
}

loadPets();
