export interface FetchMeteorsResponse {
  meteorData: Array<SimpleMeteor>
  wereDangerousMeteors?: boolean
  count?: number
}

interface EstimatedDiameter {
  meters: number
}

interface RelativeVelocity {
  kilometers_per_second: string
}

interface CloseApproachData {
  close_approach_date_full: string
  relative_velocity: RelativeVelocity
}

export interface Meteor {
  id: string
  name: string
  estimated_diameter: EstimatedDiameter
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: Array<CloseApproachData>
}

export interface SimpleMeteor
  extends Pick<Meteor, 'id' | 'name' | 'is_potentially_hazardous_asteroid'> {
  diameter: number
  close_approach_date_full: string
  relative_velocity: number
}
