import React from 'react'
import {
  Map,
  Popup,
  MapPanel,
  Controls,
  ContextMenu,
  loadDataLayer,
  PlaceSearch,
  LayerStyler,
  LayerPanelLayersPage,
  LayerPanelPage,
  LayerPanelContent,
  BasemapContainer,
  VectorLayer,
  DrawContainer
} from '@bayer/ol-kit'
import { fromLonLat } from 'ol/proj'
import olFeature from 'ol/Feature'
import olGeomPoint from 'ol/geom/Point'
import olSourceVector from 'ol/source/Vector'

import Welcome from '../../Welcome'

class App extends React.Component {
  onMapInit = async (map) => {
    // create a vector layer and add to the map
    const layer = new VectorLayer({
      title: '1904Labs HQ',
      source: new olSourceVector({
        features: [new olFeature({
          feature_type: ['1904Labs HQ'],
          title: '1904Labs HQ',
          name: '1904Labs HQ',
          geometry: new olGeomPoint(fromLonLat([-90.24618, 38.636069]))
        })]
      })
    })

    map.addLayer(layer)

    const dataLayer = await loadDataLayer(map, 'https://data.nasa.gov/api/geospatial/7zbq-j77a?method=export&format=KML')

    dataLayer.getSource().getFeatures().forEach(f => f.set('title', f.get('name')))

    window.map = map
  }

  render () {
    return (
      <Map onMapInit={this.onMapInit} fullScreen>
        <Popup />
        <MapPanel>
          <LayerPanelPage tabIcon='Home'>
            <Welcome />
          </LayerPanelPage>
          <LayerPanelPage label='Explore'>
            <PlaceSearch />
          </LayerPanelPage>
          <LayerPanelPage label='Layers'>
            <LayerPanelLayersPage />
          </LayerPanelPage>
          <LayerPanelPage label='Styles'>
            <LayerPanelContent style={{ padding: '0px', fontFamily: 'Roboto, Arial, sans-serif' }}>
              <LayerStyler />
            </LayerPanelContent>
          </LayerPanelPage>
          <LayerPanelPage label='Draw'>
            <LayerPanelContent style={{ padding: '0px', fontFamily: 'Roboto, Arial, sans-serif' }}>
              <DrawContainer style={{ position: 'relative', width: 'auto' }} />
            </LayerPanelContent>
          </LayerPanelPage>
        </MapPanel>
        <ContextMenu />
        <Controls />
        <BasemapContainer />
      </Map>
    )
  }
}

export default App
