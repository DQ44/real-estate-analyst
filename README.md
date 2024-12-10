# 🏡 Real Estate Analyzer

**Real Estate Analyzer** est un outil d’analyse quantitative pour l’immobilier, conçu pour faciliter les décisions d’investissement ou d’achat. Il permet de visualiser des zones accessibles autour d’une ville, d’analyser les données socio-économiques et immobilières, et de filtrer des annonces selon des critères précis.

---

## 🚀 Fonctionnalités

### 1. **Zonage autour d'une ville**
- Génération de zones isochrones basées sur une distance (en km) ou un temps de trajet (en minutes).
- Affichage des villes accessibles dans la zone définie.

### 2. **Analyse des villes selon des critères personnalisés**
- **Démographie :**
  - Population minimale et maximale.
  - Variation de la population.
- **Économie :**
  - Taux de chômage (actuel et historique).
  - Identification des bassins industriels.
- **Éducation :**
  - Nombre d'étudiants.
  - Présence de grandes écoles.
- **Tourisme :**
  - Nombre annuel de touristes et de nuitées.
- **Immobilier :**
  - Prix moyen des loyers et des achats immobiliers.

### 3. **Compilation des annonces immobilières**
- Agrégation et tri d’annonces d'achat ou de location pour les villes sélectionnées.
- Affichage des annonces sous forme de carte interactive ou de liste.

---

## 🛠️ Technologies utilisées

### **Langages et Frameworks**
- **Python** : Backend principal, manipulation des données, et appels API.
- **C++** : Calculs avancés pour les distances, les isochrones, et le filtrage rapide.
- **JavaScript (React.js)** : Frontend pour l'interface utilisateur.
  
### **APIs et Données**
- [INSEE API](https://api.insee.fr/) : Données démographiques et économiques.
- [Google Maps API](https://developers.google.com/maps/documentation) ou [OpenStreetMap](https://www.openstreetmap.org/) : Calcul des distances et des isochrones.
- Plateformes immobilières (SeLoger, LeBonCoin, etc.) : Pour les annonces (via scraping ou APIs).

---

## 📂 Structure du projet

```
/real-estate-analyzer
├── backend/
│   ├── app.py             # API principale
│   ├── models/            # Modèles de données
│   ├── services/          # Logique métier
├── cpp/
│   ├── main.cpp           # Point d'entrée C++
│   ├── utils.cpp          # Fonctions utilitaires
│   ├── utils.h            # Headers pour utils.cpp
│   ├── Makefile           # Script de compilation C++
├── frontend/
│   ├── src/               # Code React.js
│   ├── public/            # Ressources statiques
├── data/
│   └── datasets/          # Données statiques utilisées
└── README.md              # Documentation
```

---

## 🔧 Installation et utilisation

### Prérequis
- Python 3.9 ou plus
- C++17 ou plus
- Node.js et npm
- API keys pour Google Maps ou OpenStreetMap

### Étapes d'installation

#### 1. Clonez le dépôt
```bash
git clone https://github.com/votre_nom_utilisateur/real-estate-analyzer.git
cd real-estate-analyzer
```

#### 2. Backend Python
- Installez les dépendances :
  ```bash
  pip install -r requirements.txt
  ```
- Lancez le serveur backend :
  ```bash
  python backend/app.py
  ```

#### 3. Module C++
- Rendez-vous dans le dossier `cpp/` :
  ```bash
  cd cpp
  ```
- Compilez les fichiers C++ :
  ```bash
  make
  ```
- Testez le binaire généré :
  ```bash
  ./app
  ```

#### 4. Frontend
- Rendez-vous dans le dossier `frontend/` :
  ```bash
  cd frontend
  ```
- Installez les dépendances :
  ```bash
  npm install
  ```
- Lancez l'interface utilisateur :
  ```bash
  npm start
  ```

---

## ✨ Utilisation
1. Accédez à l'interface utilisateur via votre navigateur à l'adresse `http://localhost:3000`.
2. Sélectionnez une ville et définissez les critères d’analyse.
3. Explorez les zones et les données affichées.

---

## 📈 Contribuer
Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :
1. **Forkez** ce dépôt.
2. Créez une **branche** pour vos modifications (`git checkout -b feature/nom-de-la-fonctionnalité`).
3. Soumettez une **pull request**.

---

## 📜 Licence
Ce projet est sous licence [MIT](LICENSE).

---

## 🙌 Remerciements
Merci à toutes les ressources open source et APIs qui rendent ce projet possible ! 😊
