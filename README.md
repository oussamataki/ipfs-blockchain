# IPFS + Blockchain Demo

Ce projet est une démonstration de l'intégration entre la blockchain Ethereum (via Hardhat) et le système de fichiers décentralisé IPFS. Il permet de stocker des fichiers sur IPFS et d’enregistrer les références (hashes) sur la blockchain à l’aide de contrats intelligents.

## 🌐 Objectifs

- Déployer un contrat intelligent capable d'enregistrer des hashes IPFS.
- Uploader des fichiers sur IPFS.
- Interagir avec la blockchain pour enregistrer et lire ces hashes.

## 🛠️ Technologies utilisées

- **Solidity** : pour écrire les contrats intelligents.
- **Hardhat** : pour développer, tester et déployer les contrats.
- **JavaScript** : pour les scripts d’interaction.
- **Docker & Docker Compose** : pour simplifier l’environnement.
- **IPFS** : pour le stockage décentralisé des fichiers.

## 🧾 Structure du projet

```text
.
├── contracts/               # Contrats intelligents (Solidity)
│   ├── IPFSStorage.sol      # Contrat principal pour stocker les hashes IPFS
│   └── Lock.sol             # Exemple de contrat
├── scripts/                # Scripts JS pour déployer et interagir avec les contrats
│   ├── deploy.js
│   └── interact.js
├── test/                   # Tests des contrats (Mocha/Chai)
│   └── Lock.js
├── ignition/               # Modules de déploiement automatisé
│   └── modules/Lock.js
├── docker-compose.yaml     # Pour lancer les dépendances avec Docker
├── hardhat.config.js       # Configuration Hardhat
├── package.json            # Dépendances et scripts Node.js
└── README.md               # Documentation du projet
```

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) (>= v14)
- [Docker](https://www.docker.com/)
- [IPFS CLI](https://docs.ipfs.tech/install/cli/)
- [Metamask](https://metamask.io/) (pour interagir avec les contrats déployés)

## 🚀 Installation et exécution

1. **Cloner le projet**

```bash
git clone https://github.com/votre-utilisateur/ipfs-blockchain-demo.git
cd ipfs-blockchain-demo
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer l’environnement avec Docker (si configuré)**

```bash
docker-compose up
```

4. **Déployer les contrats**

```bash
npx hardhat compile
npx hardhat node      # Lance un nœud local
npx hardhat run scripts/deploy.js --network localhost
```

5. **Uploader un fichier sur IPFS**

Utilisez la commande :

```bash
ipfs add <chemin_fichier>
```

Notez le hash IPFS retourné.

6. **Interagir avec le contrat**

```bash
npx hardhat run scripts/interact.js --network localhost
```

## ✅ Fonctionnalités

- Ajout et récupération de hashes IPFS dans la blockchain.
- Interface d’interaction via scripts.
- Déploiement local avec Hardhat.
- Test et démonstration via scripts CLI.

## 🧪 Tests

Exécutez tous les tests avec :

```bash
npx hardhat test
```

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.

## ✍️ Auteur

Développé par **[TAKI OUSSAMA]**
