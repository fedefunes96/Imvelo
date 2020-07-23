export function getVideoBySource(source) {
  return {
    oso: require('../../assets/videos/oso.mp4'),
    puma: require('../../assets/videos/puma.mp4'),
    pinguinos: require('../../assets/videos/pinguinos.mp4'),
  }[source];
}
