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
        <button onclick="loadCategoryPets('${element.category.toLowerCase()}')" id="btn-${element.category.toLowerCase()}" class="btn w-[312px] lg:w-[300px] md:w-[155px] h-[104px] rounded-xl">
        <div class="flex items-center gap-4">
        <img src="${element.category_icon}" alt="${
          element.category
        }" class="h-[56px]">
        <span class="md:text-xl lg:text-2xl text-2xl font-bold">${
          element.category
        }</span>
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
    petContainer.innerHTML = "";
    if(pets.length == 0){
      petContainer.classList.remove("grid");
      petContainer.innerHTML = `
        <div class="flex flex-col items-center text-center gap-8">
    <img src="images/error.webp" alt="" srcset="">
    <h1 class="text-5xl font-extrabold">No Information Available</h1>
    <h4 class="w-[60%]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at
    its layout. The point of using Lorem Ipsum is that it has a.</h4>
</div>
      `;
    }
    else{
      petContainer.classList.add("grid");
    }
    pets.forEach(element => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="card w-full bg-base-100 shadow-sm">
  <div class="card-body">
    <img class="rounded-xl" src=${element.image} />
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">${element.pet_name}</h2>
      
    </div>
    <ul class="mt-6 flex flex-col gap-2 text-xs">
      <li class="flex items-center gap-4">
        <img class="h-[20px]" src="images/category.png"/>
        <p class="text-[16px]">${element.breed}</p>
      </li>
      <li class="flex items-center gap-4">
        <img class="h-[20px]" src="images/dob.png"/>
        <p class="text-[16px]">${element.date_of_birth}</p>
      </li>
      <li class="flex items-center gap-4">
        <img class="h-[20px]" src="images/gender.png"/>
        <p class="text-[16px]">${element.gender}</p>
      </li>
      <li class="flex items-center gap-4">
        <img class="h-[20px]" src="images/price.png"/>
        <p class="text-[16px]">${element.price}$</p>
      </li>
      
    </ul>
    <hr class="text-black/10 mt-4">
    <div class="mt-4 flex justify-between">
      <button class="btn rounded-lg "><img class="scale-50" src="images/like.png"></button>
      <button id="adopt" class="card-btn btn rounded-lg text-[rgba(14,122,129,1)] font-bold">Adopt</button>
      <button onclick="loadDetails('${element.petId}')" id="details" class="card-btn btn rounded-lg text-[rgba(14,122,129,1)] font-bold">Details</button>
    </div>
  </div>
</div>
        `;
    petContainer.append(card);
    });
}

loadPets();

// loadCategoryPets
const loadCategoryPets = (category) =>{
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      const allBtns = document.querySelectorAll("#categories button");
      allBtns.forEach((btn) => {
        btn.classList.remove(
          "bg-[rgba(14,122,129,1)]",
          "text-white",
          "rounded-full"
        );
      });

      const activeBtn = document.getElementById(`btn-${category}`);
      activeBtn.classList.add("bg-[rgba(14,122,129,1)]");
      activeBtn.classList.add("text-white");
      activeBtn.classList.remove("rounded-xl"); 
      activeBtn.classList.add("rounded-full");
      displayPets(data.data)
    })
    .catch((err) => console.log(err));
}


