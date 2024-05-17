// packages/[pkg].paths.js
export default {
  paths() {
    return [
      // to km
      { params: { length: 'm-to-km' }},
      { params: { length: 'cm-to-km' }},
      { params: { length: 'mm-to-km' }},
      // to m
      { params: { length: 'km-to-m' }},
      { params: { length: 'cm-to-m' }},
      { params: { length: 'mm-to-m' }},
      // to cm
      { params: { length: 'km-to-cm' }},
      { params: { length: 'm-to-cm' }},
      { params: { length: 'mm-to-cm' }},
      // to mm
      { params: { length: 'km-to-mm' }},
      { params: { length: 'm-to-mm' }},
      { params: { length: 'cm-to-mm' }},
    ]
  }
}