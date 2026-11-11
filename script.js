// Exercise Database with rich categorization, mechanics, and images
const exercisesData = [
  {
    id: 1,
    name: "Barbell Bench Press",
    category: "chest",
    muscle: "Pectoralis Major, Anterior Deltoids, Triceps",
    difficulty: "Intermediate",
    equipment: "Barbell & Bench",
    description: "The gold standard compound lift for building raw upper body pressing strength, chest density, and tricep power.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Incline Dumbbell Press",
    category: "chest",
    muscle: "Clavicular Pectoralis (Upper Chest), Front Delts",
    difficulty: "Beginner",
    equipment: "Dumbbells & Incline Bench",
    description: "Emphasizes the upper clavicular chest fibers for full chest fullness and greater unilateral shoulder stability.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Conventional Deadlift",
    category: "back",
    muscle: "Erector Spinae, Latissimus Dorsi, Glutes, Hamstrings",
    difficulty: "Advanced",
    equipment: "Barbell & Plates",
    description: "The supreme full-body posterior chain developer. Builds unmatched back thickness, gripping grip, and mental grit.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Wide-Grip Pull-Up",
    category: "back",
    muscle: "Latissimus Dorsi, Teres Major, Biceps",
    difficulty: "Intermediate",
    equipment: "Pull-Up Bar",
    description: "Bodyweight mastery for forging the elusive V-taper. Engages lats, traps, and forearm flexors simultaneously.",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Barbell Back Squat",
    category: "legs",
    muscle: "Quadriceps, Gluteus Maximus, Hamstrings, Core",
    difficulty: "Intermediate",
    equipment: "Squat Rack & Barbell",
    description: "The king of all leg exercises. Stimulates massive athletic leg drives, systemic testosterone release, and explosive power.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Romanian Deadlift (RDL)",
    category: "legs",
    muscle: "Hamstrings, Glutes, Lower Back",
    difficulty: "Intermediate",
    equipment: "Barbell or Dumbbells",
    description: "Stretches and builds thick hamstring bellies while teaching bulletproof hip-hinge mechanics.",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Overhead Military Press (OHP)",
    category: "shoulders",
    muscle: "Anterior & Lateral Deltoids, Triceps, Upper Traps",
    difficulty: "Intermediate",
    equipment: "Barbell",
    description: "Strict vertical pressing from collarbones to lockout. Builds cannonball shoulders and an unshakeable core.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Dumbbell Lateral Raise",
    category: "shoulders",
    muscle: "Lateral Deltoids",
    difficulty: "Beginner",
    equipment: "Dumbbells",
    description: "Isolates the middle shoulder head to widen your frame and build broad, dominant shoulder silhouette.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Barbell Bicep Curl",
    category: "arms",
    muscle: "Biceps Brachii, Brachialis",
    difficulty: "Beginner",
    equipment: "EZ-Bar or Straight Barbell",
    description: "The classic arm builder to stack bicep peak height, density, and forearm grip power.",
    image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Dips (Chest & Triceps)",
    category: "arms",
    muscle: "Triceps Brachii, Lower Chest, Front Delts",
    difficulty: "Intermediate",
    equipment: "Dip Station / Parallel Bars",
    description: "Often called the upper body squat. Overloads tricep horsepower and deep lower pectoral contraction.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Hanging Leg Raise",
    category: "core",
    muscle: "Rectus Abdominis, Hip Flexors, Obliques",
    difficulty: "Intermediate",
    equipment: "Pull-Up Bar",
    description: "Demanding abdominal movement focusing on the lower six-pack region with spinal decompression benefits.",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Battle Ropes Conditioning",
    category: "core",
    muscle: "Cardiovascular System, Core, Shoulders",
    difficulty: "Beginner",
    equipment: "Heavy Battle Ropes",
    description: "High-intensity metabolic conditioning protocol that torches calories, shreds fat, and enhances anaerobic stamina.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
  }
];

// DOM Elements
const exerciseGrid = document.getElementById('exerciseGrid');
const searchInput = document.getElementById('exerciseSearch');
const clearSearchBtn = document.getElementById('clearSearch');
const filterPills = document.querySelectorAll('.filter-pill');
const noResults = document.getElementById('noResults');
const themeToggle = document.getElementById('themeToggle');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

let currentCategory = 'all';
let searchQuery = '';

// Initialize Theme
function initTheme() {
  const savedTheme = localStorage.getItem('titan_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

// Toggle Theme Handler
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('titan_theme', newTheme);
});

// Mobile Nav Toggle
mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close Mobile Nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// Render Exercise Cards
function renderExercises() {
  const filtered = exercisesData.filter(ex => {
    const matchesCategory = currentCategory === 'all' || ex.category.toLowerCase() === currentCategory;
    const term = searchQuery.toLowerCase().trim();
    const matchesSearch = !term || 
      ex.name.toLowerCase().includes(term) ||
      ex.muscle.toLowerCase().includes(term) ||
      ex.equipment.toLowerCase().includes(term) ||
      ex.category.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    exerciseGrid.innerHTML = '';
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    exerciseGrid.innerHTML = filtered.map(ex => `
      <div class="exercise-card">
        <div class="exercise-img-wrap">
          <img src="${ex.image}" alt="${ex.name}" loading="lazy">
          <span class="exercise-difficulty">${ex.difficulty}</span>
        </div>
        <div class="exercise-body">
          <span class="exercise-category">${ex.category}</span>
          <h3>${ex.name}</h3>
          <p>${ex.description}</p>
          <div class="exercise-meta">
            <span><i class="fas fa-bullseye"></i> ${ex.muscle.split(',')[0]}</span>
            <span><i class="fas fa-tools"></i> ${ex.equipment}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Search Input Listener
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
  renderExercises();
});

// Clear Search Button
clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.style.display = 'none';
  searchInput.focus();
  renderExercises();
});

// Filter Pill Clicks
filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    filterPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentCategory = pill.getAttribute('data-filter');
    renderExercises();
  });
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderExercises();
});

