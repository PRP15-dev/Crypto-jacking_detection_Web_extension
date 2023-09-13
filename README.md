# Cryptonate: Crypto-Jacking Web Extension

Cryptonate is a web extension that detects and prevents crypto-jacking using machine learning. Crypto-jacking is a sneaky cyber attack that uses your device to mine cryptocurrencies without your consent. It can slow down your performance, increase your costs, and expose your data. It detects in-browser illegal cryptojacking activity using XGBoost ML model as a part of academic project. ML model used cna be hosted navtively using chrome extension feature of native host. 

## Features

- It blocks known malicious websites that engage in crypto-jacking
- It monitors the CPU usage and network traffic of websites that you visit
- It alerts you when a website is detected as malicious and blocks it automatically
- It lets you customize your settings and whitelist trusted websites


## Usage

To use Cryptonate, simply browse the web as usual. Cryptonate will run in the background and protect you from crypto-jacking.

- If a website is detected as malicious, you will see a red badge on the Cryptonate icon and a pop-up notification. You can click on the icon to see more details and options.
- If a website is detected as benign, you will see a green badge on the Cryptonate icon. You can click on the icon to see more details and options.
- You can also access the settings page by clicking on the gear icon in the pop-up window. Here you can adjust your preferences, such as:

  - Enable or disable notifications
  - Set the CPU usage and network traffic thresholds for detection
  - Add or remove websites from the whitelist

## Research Paper

Cryptonate is based on our research paper, “Cryptonate: Crypto-Jacking Web Extension,” which was published by Springer and presented at the prestigious 5th International Conference on Computational Intelligence in Pattern Recognition (CIPR 2023). In our paper, we show how we developed an innovative solution to combat crypto-jacking using a combination of static and dynamic methods. We also demonstrate how our machine learning model outperforms traditional techniques in detecting crypto-jacking websites.

You can read our paper [here][https://doi.org/10.1007/978-981-99-3734-9_29].


## Research Paper

Cryptonate is based on our research paper, “Cryptonate: Crypto-Jacking Web Extension,” which was published by Springer and presented at the prestigious 5th International Conference on Computational Intelligence in Pattern Recognition (CIPR 2023). In our paper, we show how we developed an innovative solution to combat crypto-jacking using a combination of static and dynamic methods. We also demonstrate how our machine learning model outperforms traditional techniques in detecting crypto-jacking websites.

You can read our paper [here][https://doi.org/10.1007/978-981-99-3734-9_29] or cite it using the following BibTeX entry:

```
@InProceedings{10.1007/978-981-99-3734-9_29,
author="Patil, Nilesh
and Gandhi, Dhruv
and Prajapati, Pranay
and Haria, Kevin",
editor="Das, Asit Kumar
and Nayak, Janmenjoy
and Naik, Bighnaraj
and Vimal, S.
and Pelusi, Danilo",
title="Cryptonate: Crypto-Jacking Web Extension",
booktitle="Computational Intelligence in Pattern Recognition",
year="2023",
publisher="Springer Nature Singapore",
address="Singapore",
pages="347--361",
abstract="Cybercriminals are quickly shifting their focus from ransomware to crypto-jacking due to the emergence of numerous cryptocurrencies and their rising value, as well as the lower risk and greater potential for financial benefit. Using infected electronic devices and networks, crypto-jacking enables attackers to mine Bitcoins in a less complex and less observable manner than ransomware attacks. The paper presents a novel approach to detect and prevent crypto-jacking by utilizing a combination of static and dynamic methods. The static approach utilizes a blacklist of known malicious websites and disables JavaScript on these sites to prevent unauthorized mining. The dynamic approach employs a machine learning model to identify any signs of malicious activity. If such activity is detected, the website is added to the blacklist and JavaScript is disabled to protect the device's resources. This solution not only provides a proactive approach to detecting and preventing crypto-jacking but also offers a multi-layered defense mechanism by combining both static and dynamic methods. The use of machine learning for real-time monitoring and detection of crypto-jacking activity offer a more sophisticated solution than traditional blacklisting methods. The proposed solution has the potential to be a valuable tool in the fight against the growing threat of crypto-jacking.",
isbn="978-981-99-3734-9"
}
```

## License

Cryptonate is licensed under the MIT License. See [LICENSE] for more details.


Thank you for using Cryptonate! Let’s join forces to create a safer digital world! 🌐💻🔐
