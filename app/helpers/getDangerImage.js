
export default function getDangerImageSource(dangerLevel) {
    const levelToColor = {
        1: require(`../../assets/trafficlights/red.png`),
        2: require(`../../assets/trafficlights/yellow.png`),
        3: require(`../../assets/trafficlights/green.png`)
    };
    return levelToColor[dangerLevel];
}