import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileCheck2,
  X,
  Compass,
  KeyRound,
  Maximize2,
  BedDouble,
  Bath,
  Car,
  TrendingUp,
  Award,
  Send,
  Eye,
  Check,
  Sparkles,
  Calculator,
  Layers,
  Info,
  Sun,
  Moon,
  GitCompare,
  FileText,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Ruler,
  ChevronUp,
  Menu
} from 'lucide-react';

// High-fidelity luxury real estate assets
import heroVilla from './assets/images/downtown_luxury_villa_1791608427132.jpg';
import houseFacade from './assets/images/downtown_luxury_house_1791608439456.jpg';
import luxuryInterior from './assets/images/downtown_luxury_interior_1791608449869.jpg';
import terraceGarden from './assets/images/downtown_penthouse_terrace_1791608460916.jpg';
import modernResidence from './assets/images/hero_modern_residence_1791607052883.jpg';
import curatedLiving from './assets/images/curated_interior_living_1791607065997.jpg';
import architecturalFacade from './assets/images/architectural_facade_1791607076169.jpg';
import auraModernEstate from './assets/images/aura_modern_estate_1791610453364.jpg';
import auraCanopyVilla from './assets/images/aura_canopy_villa_1791610470211.jpg';
import auraSkyPenthouse from './assets/images/aura_sky_penthouse_1791610482286.jpg';
import auraWaterfallPavilion from './assets/images/aura_waterfall_pavilion_1791610992437.jpg';
import auraSolariumRidge from './assets/images/aura_solarium_ridge_1791611005769.jpg';
import auraEmeraldEstate from './assets/images/aura_emerald_estate_1791611033385.jpg';

// Distinctive Property Blueprints (All 10 Dedicated to each property)
import blueprintVilla from './assets/images/aura_architectural_schematic_1791611017942.jpg';
import blueprintWaterfall from './assets/images/blueprint_waterfall_pavilion_1791611974888.jpg';
import blueprintCantilever from './assets/images/blueprint_cantilever_estate_1791611985219.jpg';
import blueprintSolariumRidge from './assets/images/blueprint_solarium_ridge_1791612363595.jpg';
import blueprintEmeraldSanctuary from './assets/images/blueprint_emerald_sanctuary_1791612381626.jpg';
import blueprintGlassPavilion from './assets/images/blueprint_glass_pavilion_1791612404112.jpg';
import blueprintTropicalCanopy from './assets/images/blueprint_tropical_canopy_1791612429463.jpg';
import blueprintPenthouse from './assets/images/blueprint_sky_penthouse_1791611995644.jpg';
import blueprintCourtyardManor from './assets/images/blueprint_courtyard_manor_1791612457098.jpg';
import blueprintGrandSalon from './assets/images/blueprint_grand_salon_1791612488072.jpg';

interface BlueprintData {
  code: string;
  type: string;
  dwgSheet?: string;
  scale?: string;
  image: string;
  levels: {
    levelName: string;
    description: string;
    keyRooms: string[];
  }[];
  specNotes?: string[];
}

interface Property {
  id: string;
  title: string;
  category: 'Villa' | 'Modern Estate' | 'Multi-Level' | 'Garden Estate' | 'Penthouse Residence' | 'Waterfront Villa';
  neighborhood: string;
  city: string;
  priceText: string;
  estimatedValueCr: number;
  specs: {
    beds: number;
    baths: number;
    sqft: string;
    parking: number;
    ceilingHeight: string;
    facing: string;
  };
  headline: string;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
  blueprint: BlueprintData;
  hotspots?: { x: number; y: number; title: string; detail: string }[];
}

const FEATURED_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Sovereign Downtown Villa',
    category: 'Villa',
    neighborhood: 'Ramdaspeth Downtown',
    city: 'Nagpur, India',
    priceText: 'Price on Application',
    estimatedValueCr: 12.5,
    specs: { beds: 5, baths: 6, sqft: '6,850 sq.ft', parking: 4, ceilingHeight: '14 ft', facing: 'East-Facing Vastu' },
    headline: 'Private reflection pool, smart automation & cantilevered master terrace',
    description: 'An architectural tour de force situated in the premier residential enclave of Ramdaspeth. Featuring soaring 14-foot ceiling heights, imported Italian travertine flooring, and an expansive infinity reflection pool secluded within mature tropical foliage.',
    features: [
      'Integrated Crestron Home Automation',
      'Sub-Zero & Wolf Designer Kitchen',
      'Private Swimming Pool & Sun Deck',
      'Double-Height Glass Courtyard',
      'Staff Quarters & Driver Lounge'
    ],
    image: heroVilla,
    gallery: [heroVilla, luxuryInterior, terraceGarden],
    blueprint: {
      code: 'DWG-SOV-6850',
      type: 'Multi-Level Axonometric Cutaway Schematic',
      dwgSheet: 'ARC-SOV-01',
      scale: '1:100 Metric · CAD Vetted',
      image: blueprintVilla,
      specNotes: ['Granite reflection pool apron', '14ft ceiling heights', 'Acoustic glass perimeter'],
      levels: [
        { levelName: 'Level 0 (Garden & Pool)', description: 'Formal Salon, Gourmet Kitchen, Granite Pool Apron', keyRooms: ['Formal Salon (34\' x 22\')', 'Reflection Pool (48\' x 18\')', 'Motorcourt (4 Vehicles)'] },
        { levelName: 'Level 1 (Private Suites)', description: 'Master Penthouse Suite & 2 En-Suite Bedrooms', keyRooms: ['Grand Master Suite (28\' x 20\')', 'En-Suite Dressing Room (14\' x 12\')', 'Family Lounge (22\' x 16\')'] },
        { levelName: 'Level 2 (Sky Pavilion)', description: 'Sunset Terrace & Private Gymnasium', keyRooms: ['Sky Lounge (20\' x 18\')', 'Open Solarium Deck (650 sq.ft)'] }
      ]
    },
    hotspots: [
      { x: 52, y: 72, title: 'Infinity Reflection Pool', detail: 'Granite-lined reflection pool with submerged ambient fibre-optic illumination' },
      { x: 38, y: 35, title: 'Cantilevered Master Suite', detail: 'Floor-to-ceiling glass volume opening to an unobserved twilight balcony' },
      { x: 50, y: 55, title: 'Double-Height Living Salon', detail: 'Travertine marble floors with custom acoustic glass envelope' }
    ]
  },
  {
    id: 'prop-2',
    title: 'The Lumina Waterfall Pavilion',
    category: 'Waterfront Villa',
    neighborhood: 'Civil Lines Downtown',
    city: 'Nagpur, India',
    priceText: 'Price on Application',
    estimatedValueCr: 16.5,
    specs: { beds: 5, baths: 6, sqft: '7,100 sq.ft', parking: 4, ceilingHeight: '16 ft', facing: 'North-East Facing' },
    headline: 'Multi-tiered cascading waterfall pool, private zen forest & cantilevered glass solarium',
    description: 'A sensory architectural milestone in historic Civil Lines. Anchored by a natural granite multi-tier cascading waterfall that flows directly into a negative-edge reflection pool. Acoustic double-pane floor-to-ceiling glass envelops the formal entertaining pavilions.',
    features: [
      'Multi-Tier Cascading Granite Waterfall',
      'Floating Open-Air Dining Pavilion',
      'Acoustic Low-E Triple Glazing',
      'Submerged Aquatic LED Lighting',
      'Private Spa Sanctuary with Finnish Sauna'
    ],
    image: auraWaterfallPavilion,
    gallery: [auraWaterfallPavilion, terraceGarden, modernResidence],
    blueprint: {
      code: 'DWG-LUM-7100',
      type: 'Cascading Waterfall Site & Hydrology Schematic',
      dwgSheet: 'ARC-LUM-02',
      scale: '1:100 Metric · Civil Lines CAD',
      image: blueprintWaterfall,
      specNotes: ['Cascading multi-tier natural granite waterfall', 'Acoustic triple low-E glazing', 'Submerged LED optics'],
      levels: [
        { levelName: 'Level 00 (Waterfront Apron)', description: 'Submerged pool basin, lower deck & boathouse lounge', keyRooms: ['Lower Basin Deck (52\' x 24\')', 'Cascading Pools Promenade', 'Private Spa Suite (18\' x 14\')'] },
        { levelName: 'Level 02 (Main Terrace)', description: 'Grand dining area, cocktail bar, and open terrace', keyRooms: ['Living Area & Atrium (38\' x 26\')', 'Gourmet Bar & Pantry', 'Waterfall Source Courtyard'] },
        { levelName: 'Level 03 (Observation Level)', description: 'Elevated master wing with glass canopy', keyRooms: ['Master Suite (26\' x 22\')', 'Private Solarium Terrace'] }
      ]
    },
    hotspots: [
      { x: 45, y: 58, title: 'Illuminated Cascading Falls', detail: 'Tiered dark granite waterfall aerating the private reflection pool' },
      { x: 62, y: 38, title: 'Glass Solarium Pavilion', detail: 'Cantilevered glass lounge overlooking the private tropical ravine' }
    ]
  },
  {
    id: 'prop-3',
    title: 'The Obsidian Cantilever Estate',
    category: 'Modern Estate',
    neighborhood: 'Byramji Town Downtown',
    city: 'Nagpur, India',
    priceText: 'Price on Application',
    estimatedValueCr: 15.8,
    specs: { beds: 5, baths: 6, sqft: '7,800 sq.ft', parking: 4, ceilingHeight: '14 ft', facing: 'East-Facing' },
    headline: 'Dramatic floating cantilever wings, heated lap pool & private stone arrival motorcourt',
    description: 'A structural masterpiece engineered with soaring horizontal cantilevers extending over an architectural reflection pond. Features full thermal acoustic glass envelopes, custom walnut woodwork, and an elevated terrace commanding private views over Nagpur’s northern ridge.',
    features: [
      'Floating Architectural Cantilever Wings',
      'Perimeter Heated Lap Pool & Sun Deck',
      'Commercial-Grade Acoustic Glazing',
      'Private Security Cabin & Motor Court',
      'Automated Solar Shading Louvers'
    ],
    image: auraModernEstate,
    gallery: [auraModernEstate, houseFacade, modernResidence],
    blueprint: {
      code: 'DWG-OBS-7800',
      type: 'Cantilevered Structural Wireframe CAD Render',
      dwgSheet: 'ARC-OBS-03',
      scale: '1:125 Metric · Structural Byramji',
      image: blueprintCantilever,
      specNotes: ['Reinforced cantilever overhangs', '60ft perimeter heated lap pool', 'Private arrival motorcourt'],
      levels: [
        { levelName: 'Base Level (Arrival & Pool)', description: 'Motorcourt, security entrance & perimeter lap pool', keyRooms: ['Motorcourt & Garage (4 Stalls)', 'Perimeter Lap Pool (60\' x 14\')', 'Main Foyer (18\' x 18\')'] },
        { levelName: 'Cantilever Mid-Deck', description: 'Suspended living salon & glass dining pavilion', keyRooms: ['Cantilevered Salon (32\' x 22\')', 'Chef\'s Kitchen & Cellar'] },
        { levelName: 'Upper Penthouse Wing', description: 'Dual master suites with floating glass bridges', keyRooms: ['Executive Master Suite (28\' x 20\')', 'Viewing Terrace (450 sq.ft)'] }
      ]
    },
    hotspots: [
      { x: 60, y: 78, title: 'Linear Reflection Pond', detail: 'Architectural pool wrapping beneath the cantilevered living wing' },
      { x: 32, y: 22, title: 'Floating Glass Pavilion', detail: 'Cantilevered upper observation lounge with 360-degree tree canopy vistas' }
    ]
  },
  {
    id: 'prop-4',
    title: 'The Solarium Ridge Residence',
    category: 'Multi-Level',
    neighborhood: 'Byramji Town Downtown',
    city: 'Nagpur, India',
    priceText: 'Price on Application',
    estimatedValueCr: 13.5,
    specs: { beds: 4, baths: 5, sqft: '5,900 sq.ft', parking: 3, ceilingHeight: '13 ft', facing: 'North-West Sunset Facing' },
    headline: '270-degree sunset panoramic glass corners, cantilevered infinity pool & rooftop fire terrace',
    description: 'Perched on the elevated crest of Byramji Town with uninterrupted sunset panoramas over Nagpur. Multi-level concrete and glass cantilevered volumes feature an infinity-edge swimming pool suspended in the air, a sunken rooftop conversation pit, and an automated elevator.',
    features: [
      '270° Panoramic Mitered Glass Corners',
      'Suspended Infinity Plunge Pool',
      'Sunken Rooftop Fire-Pit Lounge',
      'Thyssenkrupp Internal Elevator',
      'Automated Blackout Drapery System'
    ],
    image: auraSolariumRidge,
    gallery: [auraSolariumRidge, auraSkyPenthouse, luxuryInterior],
    blueprint: {
      code: 'DWG-SOL-5900',
      type: 'Ridge Axonometric Cutaway & Suspended Pool Schematic',
      dwgSheet: 'ARC-SOL-04',
      scale: '1:100 Metric · Ridge Topography CAD',
      image: blueprintSolariumRidge,
      specNotes: ['Suspended acrylic-edge plunge pool', '270° mitered frameless glass corners', 'Rooftop conversation fire-pit'],
      levels: [
        { levelName: 'Ridge Floor Level 01', description: 'Panoramic glass living salon and sunset dining terrace', keyRooms: ['Panoramic Great Room (32\' x 24\')', 'Show Kitchen (20\' x 14\')', 'Sunset Veranda'] },
        { levelName: 'Floor Level 02 (Suites)', description: 'Family quarters & three corner master suites', keyRooms: ['Primary Suite (24\' x 20\')', 'Corner Suite 2 & 3 (18\' x 16\')', 'Private Library'] },
        { levelName: 'Rooftop Sky Deck', description: 'Sunken fire table and cantilevered plunge pool', keyRooms: ['Fire Pit Lounge (14 Guests)', 'Plunge Pool (18\' x 12\')'] }
      ]
    },
    hotspots: [
      { x: 38, y: 55, title: 'Corner Cantilever Salon', detail: 'Frameless mitered glass lounge floating with unobstructed sunset views' },
      { x: 48, y: 35, title: 'Rooftop Flame Terrace', detail: 'Elevated terrace with stone fire table accommodating up to 14 guests' }
    ]
  },
  {
    id: 'prop-5',
    title: 'The Emerald Palm Sanctuary',
    category: 'Garden Estate',
    neighborhood: 'Wardha Road Luxury Corridor',
    city: 'Nagpur, India',
    priceText: 'Price on Application',
    estimatedValueCr: 18.2,
    specs: { beds: 6, baths: 7, sqft: '8,600 sq.ft', parking: 6, ceilingHeight: '15 ft', facing: 'East-Facing Vastu' },
    headline: '25-meter Olympic-grade pool, sprawling private royal palm lawns & palatial stone manor',
    description: 'An unprecedented private acre sanctuary situated along the prime Wardha Road luxury belt. Gated by two dozen mature royal palm trees and manicured lawns, the estate centers on a 25-meter professional swimming pool with submerged cobalt lighting and an independent guest villa.',
    features: [
      '25-Meter Heated Olympic-Grade Lap Pool',
      'Independent 2-Bedroom Guest Villa',
      'Private Tennis / Pickleball Court',
      'Automated Landscape Irrigation',
      'Commercial-Grade 100% Solar & Genset Backup'
    ],
    image: auraEmeraldEstate,
    gallery: [auraEmeraldEstate, terraceGarden, architecturalFacade],
    blueprint: {
      code: 'DWG-EME-8600',
      type: '1-Acre Master Site Plan & 25M Lap Pool Blueprint',
      dwgSheet: 'ARC-EME-05',
      scale: '1:200 Metric · Estate Master Plan',
      image: blueprintEmeraldSanctuary,
      specNotes: ['25-meter Olympic-grade pool', 'Independent 2-bedroom guest villa', 'Championship tennis court'],
      levels: [
        { levelName: 'Ground Manor Level', description: 'Grand entry vestibule, formal banqueting & veranda', keyRooms: ['Entry Grand Hall (24\' x 20\')', 'Dining Hall (28\' x 18\')', '25M Lap Pool (82\' x 18\')'] },
        { levelName: 'First Manor Level', description: 'Master wing with dual dressing quarters', keyRooms: ['Royal Master Suite (32\' x 22\')', 'Executive Study (18\' x 16\')', 'Suites 3, 4, 5'] },
        { levelName: 'Detached Guest Pavilion & Sports', description: 'Self-contained 2-bedroom guest lodge & tennis court', keyRooms: ['Guest Suite 1 & 2', 'Championship Tennis Court', '4-Car Garage'] }
      ]
    },
    hotspots: [
      { x: 55, y: 78, title: '25M Illuminated Lap Pool', detail: 'Dual-lane heated swimming pavilion with submerged cobalt LED lines' },
      { x: 50, y: 45, title: 'Palatial Stone Manor', detail: 'Hand-carved sandstone facade with double-volume master wings' }
    ]
  },
  {
    id: 'prop-6',
    title: 'The Glass Pavilion Residence',
    category: 'Multi-Level',
    neighborhood: 'Civil Lines Downtown',
    city: 'Nagpur, India',
    priceText: 'Price on Application',
    estimatedValueCr: 9.8,
    specs: { beds: 4, baths: 5, sqft: '5,400 sq.ft', parking: 3, ceilingHeight: '12 ft', facing: 'North-East Facing' },
    headline: 'Cantilevered architecture with floor-to-ceiling glass & private gated drive',
    description: 'A benchmark in modern residential engineering in historic Civil Lines. Floor-to-ceiling acoustic glass walls capture golden-hour sunlight while maintaining complete acoustic solitude. Designed for the connoisseur who values clean lines and high functionality.',
    features: [
      'Triple-Glazed Acoustic Glass Enclosure',
      'Private Motor Court with Security Cabin',
      'Elevated Viewing Balconies',
      'Climate-Controlled Wine Cellar',
      'Custom Teakwood Paneling'
    ],
    image: houseFacade,
    gallery: [houseFacade, curatedLiving, modernResidence],
    blueprint: {
      code: 'DWG-GLS-5400',
      type: 'Cantilevered Glazing & Motorcourt Floor Plan CAD',
      dwgSheet: 'ARC-GLS-06',
      scale: '1:100 Metric · Civil Lines CAD',
      image: blueprintGlassPavilion,
      specNotes: ['Cantilevered upper terrace overhangs', 'Climate-controlled walk-in wine cellar', 'Private cobblestone motorcourt'],
      levels: [
        { levelName: 'Ground Level Arrival', description: 'Cobblestone motorcourt, glass foyer, and wine cellar', keyRooms: ['Entry Foyer (16\' x 14\')', 'Motorcourt (3 Vehicles)', 'Walk-in Wine Cellar'] },
        { levelName: 'Mid-Level Glass Pavilion', description: 'Open-concept living room, kitchen, and balcony', keyRooms: ['Glass Living Pavilion (30\' x 22\')', 'Show Kitchen (18\' x 14\')', 'Cantilevered Terrace'] },
        { levelName: 'Upper Level Bedroom Suites', description: 'Primary master suite with acoustic glass terrace', keyRooms: ['Master Bedroom (24\' x 18\')', 'Walk-in Dressing Room', 'Suites 2 & 3'] }
      ]
    }
  },
  {
    id: 'prop-7',
    title: 'The Tropical Canopy Villa',
    category: 'Villa',
    neighborhood: 'Wardha Road Luxury Corridor',
    city: 'Nagpur, India',
    priceText: 'Price on Application',
    estimatedValueCr: 11.2,
    specs: { beds: 4, baths: 5, sqft: '6,200 sq.ft', parking: 4, ceilingHeight: '13 ft', facing: 'East-Facing' },
    headline: 'Bespoke wooden louvered facade, tranquil reflection watercourt & lush landscape sanctuary',
    description: 'Set within an exclusive, low-density enclave along the Wardha Road growth corridor. Features natural Burma teak wood screening that dynamically regulates tropical light, opening into expansive glass lounges and a private illuminated lap pool.',
    features: [
      'Operable Burma Teak Screening Slats',
      'Lush Tropical Garden Walkways & Lighting',
      'Integrated Outdoor Dining & Lounge Deck',
      'Vastu-Compliant East-Facing Design',
      'Smart VRV Air Conditioning System'
    ],
    image: auraCanopyVilla,
    gallery: [auraCanopyVilla, heroVilla, architecturalFacade],
    blueprint: {
      code: 'DWG-CAN-6200',
      type: 'Wood Louvered Screen Facade & Watercourt Plan',
      dwgSheet: 'ARC-CAN-07',
      scale: '1:100 Metric · Wardha Corridor CAD',
      image: blueprintTropicalCanopy,
      specNotes: ['Burma teak operable facade louvers', 'Central courtyard reflection lap pool', 'Timber canopy structure'],
      levels: [
        { levelName: 'Central Watercourt Level', description: 'Internal tropical garden, water steps & reflection lap pool', keyRooms: ['Reflection Lap Pool (40\' x 15\')', 'Stepping Stones Court', 'Alfresco Dining Veranda'] },
        { levelName: 'West Living Wing', description: 'Kitchen, dining pavilion and master suite with outdoor shower', keyRooms: ['Living & Dining (32\' x 22\')', 'Primary Suite 1', 'En-Suite Bath'] },
        { levelName: 'East Bedroom Wing', description: 'Private bedroom suites screened by Burma teak slats', keyRooms: ['Bedroom Suites 2 & 3', 'Private Garden Terraces'] }
      ]
    }
  },
  {
    id: 'prop-8',
    title: 'The Horizon Sky-Villa Penthouse',
    category: 'Penthouse Residence',
    neighborhood: 'Ramdaspeth Downtown',
    city: 'Nagpur, India',
    priceText: 'Price on Application',
    estimatedValueCr: 13.9,
    specs: { beds: 4, baths: 5, sqft: '5,600 sq.ft', parking: 3, ceilingHeight: '14 ft', facing: 'West-Facing Sunset' },
    headline: 'Wraparound sunset terrace with sunken fire-pit lounge & private sky plunge pool',
    description: 'Elevated luxury overlooking the downtown skyline of Nagpur. Features a dramatic Roman travertine terrace with a sunken fire-pit conversation lounge, private heated plunge pool, and floor-to-ceiling glass pocket doors that dissolve the boundary between indoors and outdoors.',
    features: [
      'Sunken Outdoor Fire-Pit Lounge',
      'Private Heated Sky-Villa Pool',
      'Seamless Pocket Glass Slider Doors',
      'Custom Travertine Paving & Backlit Steps',
      'Private Keycard Elevator Access'
    ],
    image: auraSkyPenthouse,
    gallery: [auraSkyPenthouse, luxuryInterior, terraceGarden],
    blueprint: {
      code: 'DWG-HOR-5600',
      type: 'Penthouse Axonometric Plan & Wraparound Sky Terrace',
      dwgSheet: 'ARC-HOR-08',
      scale: '1:100 Metric · Ramdaspeth Penthouse',
      image: blueprintPenthouse,
      specNotes: ['Sunken Roman travertine fire pit', 'Private heated sky-villa pool', 'Seamless pocket glass slider doors'],
      levels: [
        { levelName: 'Penthouse Interior Floor', description: 'Grand Master Suite, Living Area, Gourmet Kitchen', keyRooms: ['Grand Master Suite (28\' x 22\')', 'Living Area (36\' x 24\')', 'Gourmet Kitchen (20\' x 16\')'] },
        { levelName: 'Rooftop Sky Deck', description: 'Rooftop Pool, Sunken Fire Pit & Lounge Deck', keyRooms: ['Rooftop Pool (22\' x 14\')', 'Sunken Fire Pit (12 Seats)', 'Wraparound Terrace (2,400 sq.ft)'] }
      ]
    }
  },
  {
    id: 'prop-9',
    title: 'The Courtyard Grand Manor',
    category: 'Garden Estate',
    neighborhood: 'Dharampeth Downtown',
    city: 'Nagpur, India',
    priceText: 'Price on Application',
    estimatedValueCr: 14.2,
    specs: { beds: 6, baths: 7, sqft: '8,200 sq.ft', parking: 5, ceilingHeight: '14 ft', facing: 'North-East Facing' },
    headline: 'Bespoke living salon with 20-foot glass volume & cascading garden water feature',
    description: 'Designed as a timeless urban sanctuary in downtown Dharampeth. Centered around a tranquil open-air internal courtyard and linear water installation that naturally cools the residence, paired with private elevator access across all floors.',
    features: [
      'Private Hydraulic Thyssenkrupp Elevator',
      'Linear Architectural Water Features',
      'Double-Height Living Salon with Sculptural Chandelier',
      'Rooftop Zen Lounge & Barbecue Area',
      'Full Generator & Solar Backup System'
    ],
    image: terraceGarden,
    gallery: [terraceGarden, luxuryInterior, architecturalFacade],
    blueprint: {
      code: 'DWG-CRT-8200',
      type: 'Central Zen Courtyard & Double-Height Void Schematic',
      dwgSheet: 'ARC-CRT-09',
      scale: '1:125 Metric · Dharampeth CAD',
      image: blueprintCourtyardManor,
      specNotes: ['Central open-air water courtyard', 'Thyssenkrupp hydraulic elevator core', 'Double-height volume void'],
      levels: [
        { levelName: 'Ground Courtyard Level', description: 'Central zen courtyard (32\' x 36\') with cascading water features & salon', keyRooms: ['Grand Salon (36\' x 24\')', 'Central Zen Courtyard (32\' x 36\')', 'Cascading Water Promenade'] },
        { levelName: 'Executive & Library Wing', description: 'Private library (22\' x 28\'), guest suite, and hydraulic elevator', keyRooms: ['Private Library (22\' x 28\')', 'Dining Wing', 'Hydraulic Elevator Core'] },
        { levelName: 'First Bedroom Floor', description: 'Four corner en-suite bedrooms and double-height void overlook', keyRooms: ['Master Suite 1 (26\' x 20\')', 'Suites 2, 3, 4', 'Void Overlook'] }
      ]
    }
  },
  {
    id: 'prop-10',
    title: 'The Grand Salon Residence',
    category: 'Multi-Level',
    neighborhood: 'Civil Lines Downtown',
    city: 'Nagpur, India',
    priceText: 'Price on Application',
    estimatedValueCr: 8.5,
    specs: { beds: 4, baths: 5, sqft: '4,950 sq.ft', parking: 3, ceilingHeight: '20 ft Double-Height', facing: 'East-Facing' },
    headline: 'Double-height volume with bookmatched travertine fireplace & bespoke Italian finishes',
    description: 'A monument to modern interior architecture. Showcasing double-height 20-foot ceilings, bespoke Italian modular furnishings, bookmatched Roman travertine accent walls, and floor-to-ceiling glass offering tranquil views of Civil Lines canopy.',
    features: [
      'Double-Height 20-Foot Living Salon',
      'Bookmatched Travertine Feature Wall',
      'Hand-Blown Murano Art Chandelier',
      'Bespoke Italian Kitchen by Poliform',
      'Home Theater with Dolby Atmos Sound'
    ],
    image: luxuryInterior,
    gallery: [luxuryInterior, heroVilla, houseFacade],
    blueprint: {
      code: 'DWG-SLN-4950',
      type: '20-Foot Double-Height Cross-Section & Mezzanine CAD',
      dwgSheet: 'ARC-SLN-10',
      scale: '1:75 Metric · Cross-Section A-A',
      image: blueprintGrandSalon,
      specNotes: ['Bookmatched Roman travertine fireplace hearth', '20-foot ceiling volume with ceiling skylights', 'Mezzanine library catwalk overlooking salon'],
      levels: [
        { levelName: 'Ground Floor Salon', description: '20-foot volume open area (20\' x 40\'), fireplace hearth & kitchen', keyRooms: ['Double-Height Salon (20\' x 40\')', 'Bookmatched Travertine Hearth', 'Show Kitchen'] },
        { levelName: 'Mezzanine Level Plan', description: 'Library lounge, catwalk overlook, and primary master suite', keyRooms: ['Library Lounge', 'Mezzanine Catwalk', 'Primary Suite (24\' x 18\')'] },
        { levelName: 'Cross-Section A-A', description: 'Structural trusses, ceiling volume skylights & acoustic envelope', keyRooms: ['20-0" Ceiling Volume', 'Catwalk Void Overlook', 'Suites 2 & 3'] }
      ]
    }
  }
];

const NAGPUR_NEIGHBORHOODS = [
  {
    name: 'Civil Lines',
    tagline: 'Colonial Heritage & Diplomatic Canopies',
    priceRange: '₹14,000 – ₹22,000 / sq.ft',
    vibe: 'Wide tree-lined boulevards, elite judicial quarters, and prestigious low-density residential estates.',
    highlights: ['Zero commercial congestion', 'Near High Court & Raj Bhavan', 'Highest green canopy index in Nagpur']
  },
  {
    name: 'Ramdaspeth',
    tagline: 'The Downtown Financial & Medical Elite Hub',
    priceRange: '₹15,000 – ₹24,000 / sq.ft',
    vibe: 'The coveted beating heart of luxury Nagpur living, prized for privacy, prestige, and central accessibility.',
    highlights: ['Prime downtown location', 'Exclusive standalone gated plots', 'Walking distance to premier private hospitals & clubs']
  },
  {
    name: 'Dharampeth',
    tagline: 'Cultural Sophistication & Urban Living',
    priceRange: '₹13,500 – ₹20,500 / sq.ft',
    vibe: 'Nagpur’s cultural center blending high-end fashion, upscale cafes, and multi-generational family manors.',
    highlights: ['Lively high-street dining', 'Architectural multi-level homes', 'Rich legacy community']
  },
  {
    name: 'Byramji Town',
    tagline: 'Elevated Ridge Living & Serenity',
    priceRange: '₹12,000 – ₹18,000 / sq.ft',
    vibe: 'North Nagpur’s premier elevated enclave offering panoramic skyline views and discreet, quiet streets.',
    highlights: ['Panoramic urban vistas', 'Spacious penthouse residences', 'Proximity to Sadar commercial zone']
  },
  {
    name: 'Wardha Road & MIHAN Corridor',
    tagline: 'High-Tech Global Growth Corridor',
    priceRange: '₹8,500 – ₹14,500 / sq.ft',
    vibe: 'Rapidly emerging luxury growth belt driven by global aerospace, tech parks, and international airport connectivity.',
    highlights: ['Near Dr. Babasaheb Ambedkar Airport', 'Highest appreciation trajectory (8.5% YoY)', 'Modern gated villa communities']
  }
];

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');
  
  // Hero Flagship Switcher
  const [heroPropertyIndex, setHeroPropertyIndex] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<{ title: string; detail: string } | null>(null);

  // Stand-out visual modes: Day/Twilight Lighting toggle & Blueprint View mode
  const [lightingMode, setLightingMode] = useState<'twilight' | 'golden'>('twilight');
  const [viewSchematicMode, setViewSchematicMode] = useState<boolean>(false);

  // Property Comparison Matrix
  const [comparePropA, setComparePropA] = useState<string>('prop-1');
  const [comparePropB, setComparePropB] = useState<string>('prop-2');

  // Dedicated Blueprint CAD Studio State
  const [selectedStudioPropId, setSelectedStudioPropId] = useState<string>('prop-1');
  const [selectedStudioLevel, setSelectedStudioLevel] = useState<number>(0);
  const [studioZoom, setStudioZoom] = useState<number>(1);
  const [cardBlueprintView, setCardBlueprintView] = useState<Record<string, boolean>>({});
  const [modalBlueprintZoom, setModalBlueprintZoom] = useState<number>(1);
  const [activeModalBlueprintLevel, setActiveModalBlueprintLevel] = useState<number>(0);

  // Modal active tab: 'photos' | 'blueprint'
  const [modalTab, setModalTab] = useState<'photos' | 'blueprint'>('photos');

  // Scroll wheel & scroll position progress for theme feedback
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile / tablet navigation drawer
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  // Active neighborhood in Area section
  const [activeNeighborhood, setActiveNeighborhood] = useState<number>(0);

  // Interactive Investment Estimator State
  const [calculatorBudgetCr, setCalculatorBudgetCr] = useState<number>(14);
  const [holdingYears, setHoldingYears] = useState<number>(5);

  // Modals state
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [sellModalOpen, setSellModalOpen] = useState(false);
  const [tourSubmitted, setTourSubmitted] = useState(false);
  const [sellSubmitted, setSellSubmitted] = useState(false);

  // Contact section state
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Buying Luxury Home',
    preferredProperty: 'The Lumina Waterfall Pavilion',
    message: ''
  });

  // Tour booking state
  const [tourData, setTourData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyName: 'The Sovereign Downtown Villa',
    preferredDate: '',
    timeSlot: 'Morning (10:30 AM - 1:00 PM)',
    notes: ''
  });

  // Sell home state
  const [sellData, setSellData] = useState({
    ownerName: '',
    phone: '',
    email: '',
    propertyLocation: 'Civil Lines, Nagpur',
    propertyType: 'Standalone Luxury Villa',
    approximateSize: '5,500 sq.ft',
    timeline: 'Immediate (within 30-60 days)'
  });

  const PHONE_DISPLAY = '8007678916';
  const PHONE_TEL = 'tel:8007678916';

  const getWhatsAppUrl = (customMessage?: string) => {
    const text = customMessage || "Hello Aura Living, I am interested in inquiring about Downtown Luxury houses in Nagpur, India.";
    return `https://wa.me/918007678916?text=${encodeURIComponent(text)}`;
  };

  const getPropertyWhatsAppUrl = (prop: Property) => {
    const text = `Hello Aura Living, I would like to inquire about "${prop.title}" (${prop.neighborhood}, Nagpur). Please share the private dossier, CAD blueprint (${prop.blueprint.code}), and viewing schedule.`;
    return `https://wa.me/918007678916?text=${encodeURIComponent(text)}`;
  };

  const filteredProperties = activeCategoryFilter === 'All'
    ? FEATURED_PROPERTIES
    : FEATURED_PROPERTIES.filter(p => p.category === activeCategoryFilter);

  const currentHeroProperty = FEATURED_PROPERTIES[heroPropertyIndex];

  // Calculated figures for investment tool
  const stampDutyAndReg = (calculatorBudgetCr * 0.07).toFixed(2);
  const estimatedAppreciationRate = 0.084;
  const futureValue = (calculatorBudgetCr * Math.pow(1 + estimatedAppreciationRate, holdingYears)).toFixed(2);
  const capitalGain = (Number(futureValue) - calculatorBudgetCr).toFixed(2);

  const propertyA = FEATURED_PROPERTIES.find(p => p.id === comparePropA) || FEATURED_PROPERTIES[0];
  const propertyB = FEATURED_PROPERTIES.find(p => p.id === comparePropB) || FEATURED_PROPERTIES[1];
  const studioProperty = FEATURED_PROPERTIES.find(p => p.id === selectedStudioPropId) || FEATURED_PROPERTIES[0];

  const NAV_LINKS = [
    { id: 'featured-properties', label: 'Downtown Houses (10)' },
    { id: 'blueprint-studio', label: 'CAD Blueprints' },
    { id: 'comparison', label: 'Compare Spec' },
    { id: 'services', label: 'Selling Services' },
    { id: 'estimator', label: 'Acquisition Estimator' },
    { id: 'about', label: 'About Aura Living' },
    { id: 'contact', label: 'Contact Desk' }
  ];

  const scrollTo = (id: string) => {
    setMobileNavOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#08090b] text-[#f7f4ee] font-sans selection:bg-[#d6c7b2] selection:text-[#08090b] relative overflow-x-hidden ${lightingMode === 'golden' ? 'brightness-105 contrast-[102%]' : ''}`}>
      
      {/* Luxury Theme Scroll Wheel Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-black/40">
        <div
          className="h-full bg-gradient-to-r from-[#bfa888] via-[#f7f4ee] to-[#d6c7b2] shadow-[0_0_12px_rgba(214,199,178,0.9)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Ambient Lighting & Architectural Grid Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40 bg-architectural-grid" />
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[min(1300px,100vw)] h-[650px] bg-radial-spotlight blur-3xl z-0" />
      
      {/* =========================================================================
          1. TOP BAR (Strict 3-Zone Contract: Brand Wordmark | Nav Links | 1 Primary CTA)
         ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#08090b]/92 backdrop-blur-xl border-b border-white/[0.07] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 xl:gap-8">
          
          {/* Zone 1: Single Text Element Wordmark - AURA LIVING */}
          <a href="#" className="flex items-center gap-2.5 group whitespace-nowrap shrink-0">
            <span className="font-serif-display text-xl min-[380px]:text-2xl sm:text-3xl font-semibold tracking-tight text-[#f7f4ee] group-hover:text-[#d6c7b2] transition-colors">
              Aura Living
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d6c7b2] shadow-[0_0_10px_rgba(214,199,178,0.9)]" aria-hidden="true" />
          </a>

          {/* Zone 2: Concise Single-line Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-widest font-medium text-[#9da1af]">
            <button 
              onClick={() => scrollTo('featured-properties')} 
              className="hover:text-[#f7f4ee] transition-colors whitespace-nowrap cursor-pointer">
              Downtown Houses (10)
            </button>
            <button 
              onClick={() => scrollTo('blueprint-studio')} 
              className="hover:text-[#d6c7b2] text-[#c2b29c] font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#d6c7b2]" />
              <span>CAD Blueprints</span>
            </button>
            <button 
              onClick={() => scrollTo('comparison')} 
              className="hover:text-[#f7f4ee] transition-colors whitespace-nowrap cursor-pointer">
              Compare Spec
            </button>
            <button 
              onClick={() => scrollTo('services')} 
              className="hover:text-[#f7f4ee] transition-colors whitespace-nowrap cursor-pointer">
              Selling Services
            </button>
            <button 
              onClick={() => scrollTo('estimator')} 
              className="hover:text-[#f7f4ee] transition-colors whitespace-nowrap cursor-pointer">
              Acquisition Estimator
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className="hover:text-[#f7f4ee] transition-colors whitespace-nowrap cursor-pointer">
              About Aura Living
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="hover:text-[#f7f4ee] transition-colors whitespace-nowrap cursor-pointer">
              Contact Desk
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => {
                setTourModalOpen(true);
                setTourSubmitted(false);
              }}
              className="relative group overflow-hidden inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] active:scale-[0.98] transition-all rounded-md shadow-[0_0_20px_rgba(214,199,178,0.25)] whitespace-nowrap cursor-pointer">
              <span className="sm:hidden">Book Viewing</span>
              <span className="hidden sm:inline">Schedule Viewing</span>
            </button>
            <button
              onClick={() => setMobileNavOpen(open => !open)}
              className="xl:hidden p-2 rounded-md text-[#d6c7b2] bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileNavOpen}>
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet / small-laptop navigation drawer */}
        {mobileNavOpen && (
          <nav className="xl:hidden border-t border-white/[0.07] bg-[#08090b]/98 backdrop-blur-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 sm:grid-cols-2 gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-3 py-3 rounded-lg text-sm uppercase tracking-widest font-medium text-[#9da1af] hover:text-[#f7f4ee] hover:bg-white/[0.04] transition-colors cursor-pointer">
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* QUICK CONTACT UTILITY STRIP WITH AMBIENT LIGHTING TOGGLE */}
      <div className="relative z-10 bg-[#0e1015]/85 backdrop-blur-md border-b border-white/[0.05] text-xs py-2 px-4 text-[#8e92a0]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#d6c7b2]">
              <MapPin className="w-3.5 h-3.5 text-[#d6c7b2]" />
              <span className="font-medium tracking-wide">Nagpur, India</span>
            </span>
            <span className="text-[#333742]" aria-hidden="true">·</span>
            <span className="hidden sm:inline text-[#9ea2b0]">21.1458° N, 79.0882° E · Aura Living Luxury Portfolio</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            {/* Ambient Lighting Mode Toggle (Stand-out feature) */}
            <div className="hidden md:flex items-center gap-1 p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px]">
              <button
                onClick={() => setLightingMode('twilight')}
                className={`px-2 py-0.5 rounded flex items-center gap-1 transition-all cursor-pointer ${
                  lightingMode === 'twilight' ? 'bg-[#d6c7b2] text-[#08090b] font-semibold' : 'text-[#8e92a0] hover:text-[#f7f4ee]'
                }`}>
                <Moon className="w-3 h-3" />
                <span>Twilight View</span>
              </button>
              <button
                onClick={() => setLightingMode('golden')}
                className={`px-2 py-0.5 rounded flex items-center gap-1 transition-all cursor-pointer ${
                  lightingMode === 'golden' ? 'bg-[#d6c7b2] text-[#08090b] font-semibold' : 'text-[#8e92a0] hover:text-[#f7f4ee]'
                }`}>
                <Sun className="w-3 h-3" />
                <span>Golden Hour</span>
              </button>
            </div>

            <a 
              href={PHONE_TEL}
              className="flex items-center gap-1.5 text-[#f7f4ee] hover:text-[#d6c7b2] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#d6c7b2]" />
              <span className="font-semibold tracking-wide font-mono">{PHONE_DISPLAY}</span>
            </a>
            <span className="text-[#333742]" aria-hidden="true">·</span>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#46e681] transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="font-semibold tracking-wide font-mono"><span className="hidden sm:inline">WhatsApp: </span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      <main className="relative z-10">
        {/* =========================================================================
            2. HERO SECTION - CINEMATIC ARCHITECTURAL STAGE WITH DEDICATED PROPERTY BLUEPRINTS
           ========================================================================= */}
        <section className="relative overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
              
              {/* Left Column: Expressive Typographic Hook & Action Controls */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-7 min-w-0">
                
                {/* Refined Architectural Kicker */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase text-[#d6c7b2]">
                  <Sparkles className="w-3.5 h-3.5 text-[#d6c7b2]" />
                  <span>Aura Living · Distinctive Blueprints & Schematics</span>
                </div>

                {/* Main Headline with Typographic Depth */}
                <h1 className="font-serif-display text-[2.15rem] sm:text-5xl md:text-6xl lg:text-[3.4rem] xl:text-6xl font-semibold text-[#f7f4ee] leading-[1.08] text-balance">
                  Where modern technology meets <span className="italic font-normal text-[#d6c7b2] underline decoration-1 decoration-[#d6c7b2]/40 underline-offset-8">your dream home.</span>
                </h1>

                {/* Subheadline with Precise Value Narrative */}
                <p className="text-base sm:text-lg text-[#9ea2b0] leading-relaxed max-w-xl">
                  Each residence in our portfolio features a custom architectural schematic and 3D wireframe blueprint. Explore spatial volumes, structural cantilevers, and hydrology plans directly before scheduling a private site visit.
                </p>

                {/* Dynamic Property Switcher Bar */}
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                  <div className="text-[11px] uppercase tracking-wider text-[#787c8a] font-semibold px-2 mb-1.5">
                    Flagship Masterpieces & Blueprints:
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[FEATURED_PROPERTIES[0], FEATURED_PROPERTIES[1], FEATURED_PROPERTIES[2]].map((prop, idx) => (
                      <button
                        key={prop.id}
                        onClick={() => {
                          setHeroPropertyIndex(idx);
                          setActiveHotspot(null);
                        }}
                        className={`px-2.5 py-2 rounded-lg text-left text-xs transition-all cursor-pointer ${
                          heroPropertyIndex === idx
                            ? 'bg-[#d6c7b2] text-[#08090b] font-semibold shadow-md'
                            : 'text-[#9ea2b0] hover:text-[#f7f4ee] hover:bg-white/[0.04]'
                        }`}>
                        <span className="block truncate font-medium">{prop.title.replace('The ', '')}</span>
                        <span className="block text-[10px] opacity-75 truncate">{prop.blueprint.code}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => scrollTo('featured-properties')}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] active:scale-[0.98] transition-all rounded-lg shadow-[0_0_25px_rgba(214,199,178,0.3)] cursor-pointer whitespace-nowrap">
                    <span>View All 10 Residences</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppUrl(`Hello Aura Living, I am reviewing ${currentHeroProperty.title} (${currentHeroProperty.blueprint.code}) and would like to receive the full architectural CAD package and schedule a viewing.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#25D366] bg-[#101319] hover:bg-[#161a22] border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all rounded-lg cursor-pointer whitespace-nowrap shadow-lg">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp {PHONE_DISPLAY}</span>
                  </a>

                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center gap-2 px-4 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#9ea2b0] hover:text-[#f7f4ee] bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-all rounded-lg cursor-pointer whitespace-nowrap">
                    <Phone className="w-4 h-4 text-[#d6c7b2]" />
                    <span>Direct Call</span>
                  </a>
                </div>

                {/* Live Reassurance Metrics */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#8e92a0]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d6c7b2] shrink-0" />
                    <span>Custom CAD Blueprints for Each Residence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d6c7b2] shrink-0" />
                    <span>Nagpur Verified Titles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d6c7b2] shrink-0" />
                    <span>Bespoke Selling Advisory</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Hero Visual Stage with DEDICATED Property Blueprint Toggle */}
              <div className="lg:col-span-6 min-w-0">
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#111319] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                  
                  {/* Visual Mode Bar on top right of the hero frame */}
                  <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 p-1 rounded-lg bg-[#08090b]/85 backdrop-blur-md border border-white/[0.1] text-[11px]">
                    <button
                      onClick={() => setViewSchematicMode(!viewSchematicMode)}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-all cursor-pointer ${
                        viewSchematicMode ? 'bg-[#d6c7b2] text-[#08090b] font-semibold' : 'text-[#d6c7b2] hover:text-[#f7f4ee]'
                      }`}>
                      <Layers className="w-3.5 h-3.5" />
                      <span className="sm:hidden">{viewSchematicMode ? 'Photo' : 'Blueprint'}</span>
                      <span className="hidden sm:inline">{viewSchematicMode ? 'Photo Mode' : `View ${currentHeroProperty.blueprint.code} Blueprint`}</span>
                    </button>
                  </div>

                  {/* Hero Showcase Image (Switches to the SPECIFIC blueprint for that property!) */}
                  <div className="relative h-[460px] sm:h-[520px] w-full overflow-hidden bg-[#14161f]">
                    <img
                      key={currentHeroProperty.id + (viewSchematicMode ? '-blueprint' : '-photo')}
                      src={viewSchematicMode ? currentHeroProperty.blueprint.image : currentHeroProperty.image}
                      alt={`${currentHeroProperty.title} in Nagpur, India`}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Atmospheric Lighting Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-black/30 pointer-events-none" />

                    {/* Interactive Architectural Hotspot Pins (active in photo mode) */}
                    {!viewSchematicMode && currentHeroProperty.hotspots?.map((hotspot, idx) => (
                      <div
                        key={idx}
                        style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-20">
                        <button
                          onClick={() => setActiveHotspot(activeHotspot?.title === hotspot.title ? null : hotspot)}
                          className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#d6c7b2] text-[#08090b] cursor-pointer shadow-[0_0_15px_rgba(214,199,178,0.9)] hover:scale-110 active:scale-95 transition-transform"
                          title={hotspot.title}
                          aria-label={hotspot.title}>
                          <span className="absolute inset-0 rounded-full bg-[#d6c7b2] animate-ping opacity-60 pointer-events-none" />
                          <Info className="w-3.5 h-3.5 font-bold relative z-10" />
                        </button>
                      </div>
                    ))}

                    {/* Active Hotspot Reveal Card */}
                    {activeHotspot && !viewSchematicMode && (
                      <div className="absolute top-6 left-6 right-6 z-30 p-4 rounded-xl bg-[#08090b]/95 backdrop-blur-xl border border-[#d6c7b2]/40 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d6c7b2] block mb-0.5">
                              Architectural Hotspot
                            </span>
                            <h4 className="text-sm font-semibold text-[#f7f4ee]">{activeHotspot.title}</h4>
                            <p className="text-xs text-[#9ea2b0] mt-1 leading-relaxed">{activeHotspot.detail}</p>
                          </div>
                          <button
                            onClick={() => setActiveHotspot(null)}
                            className="p-1 text-[#8e92a0] hover:text-[#f7f4ee] cursor-pointer">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Top Overlay Badge */}
                    <div className="absolute top-4 left-4 max-w-[calc(100%-8.5rem)] sm:max-w-[calc(100%-17rem)] flex items-center gap-2 bg-[#08090b]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.08] text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#d6c7b2] shrink-0" />
                      <span className="font-semibold text-[#d6c7b2] truncate">{currentHeroProperty.neighborhood}</span>
                      <span className="text-[#555a68] hidden md:inline">·</span>
                      <span className="text-[#f7f4ee] font-mono hidden md:inline whitespace-nowrap">{viewSchematicMode ? currentHeroProperty.blueprint.code : 'Aura Living'}</span>
                    </div>

                    {/* Floating Bottom Dossier Box */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-4 sm:p-5 rounded-xl bg-[#0e1017]/90 backdrop-blur-xl border border-white/[0.1] shadow-2xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#d6c7b2] block">
                            {viewSchematicMode ? currentHeroProperty.blueprint.type : `Downtown Luxury House · ${currentHeroProperty.specs.facing}`}
                          </span>
                          <h3 className="font-serif-display text-lg sm:text-xl font-semibold text-[#f7f4ee]">
                            {currentHeroProperty.title}
                          </h3>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="text-xs font-mono text-[#d6c7b2] block">{currentHeroProperty.specs.sqft}</span>
                          <span className="text-[11px] text-[#8e92a0]">{currentHeroProperty.specs.beds} BHK · Ceiling {currentHeroProperty.specs.ceilingHeight}</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#9ea2b0] leading-relaxed line-clamp-1 mb-3">
                        {currentHeroProperty.headline}
                      </p>

                      <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-[#f7f4ee] tracking-wide">
                          {currentHeroProperty.priceText}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setSelectedProperty(currentHeroProperty);
                              setModalTab('blueprint');
                            }}
                            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#d6c7b2] bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-md transition-colors cursor-pointer flex items-center gap-1.5">
                            <Layers className="w-3 h-3" />
                            <span>CAD Blueprint</span>
                          </button>
                          <button
                            onClick={() => {
                              setSelectedProperty(currentHeroProperty);
                              setModalTab('photos');
                            }}
                            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] rounded-md transition-colors cursor-pointer flex items-center gap-1.5">
                            <Eye className="w-3 h-3" />
                            <span>Full Dossier</span>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            HIGH-CONTRAST BROKERAGE METRICS STRIP
           ========================================================================= */}
        <section className="border-y border-white/[0.07] bg-[#0b0d11]/80 backdrop-blur-md py-9">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-left">
              
              <div className="p-3 border-l-2 border-[#d6c7b2]/60 pl-5">
                <span className="text-xs uppercase tracking-widest text-[#787c8a] block mb-1">Portfolio Class</span>
                <span className="text-2xl xl:text-3xl font-serif-display font-semibold text-[#f7f4ee]">Luxury Homes</span>
                <p className="text-xs text-[#8e92a0] mt-1">10 standalone estates & multi-level residences</p>
              </div>

              <div className="p-3 border-l-2 border-[#d6c7b2]/60 pl-5">
                <span className="text-xs uppercase tracking-widest text-[#787c8a] block mb-1">Featured Focus</span>
                <span className="text-2xl xl:text-3xl font-serif-display font-semibold text-[#d6c7b2]">Downtown Houses</span>
                <p className="text-xs text-[#8e92a0] mt-1">Civil Lines, Ramdaspeth, Dharampeth, Byramji Town</p>
              </div>

              <div className="p-3 border-l-2 border-[#d6c7b2]/60 pl-5">
                <span className="text-xs uppercase tracking-widest text-[#787c8a] block mb-1">Architectural Specs</span>
                <span className="text-2xl xl:text-3xl font-serif-display font-semibold text-[#f7f4ee]">Custom Blueprints</span>
                <p className="text-xs text-[#8e92a0] mt-1">Unique 3D schematics & floorplans per property</p>
              </div>

              <div className="p-3 border-l-2 border-[#d6c7b2]/60 pl-5">
                <span className="text-xs uppercase tracking-widest text-[#787c8a] block mb-1">Aura Living Desk</span>
                <a href={PHONE_TEL} className="text-2xl xl:text-3xl font-mono font-bold text-[#d6c7b2] hover:underline block">
                  {PHONE_DISPLAY}
                </a>
                <p className="text-xs text-[#8e92a0] mt-1">Direct WhatsApp & private appointments</p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            3. FEATURED PROPERTIES: EXPANDED TO 10 DOWNTOWN LUXURY HOUSES
           ========================================================================= */}
        <section id="featured-properties" className="py-16 sm:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header with Refined Typography */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6 lg:gap-8">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c2b29c]">
                  <Layers className="w-3.5 h-3.5 text-[#d6c7b2]" />
                  <span>Curated Collection · 10 Prime Residences with Custom Blueprints</span>
                </div>
                <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f4ee]">
                  Featured Downtown Luxury Houses
                </h2>
                <p className="text-sm sm:text-base text-[#9ea2b0] leading-relaxed">
                  Carefully selected residences represented by Aura Living in Nagpur, India. Click on any residence to inspect its bespoke architectural blueprint and floorplan dimensions.
                </p>
              </div>

              {/* Segmented Filter Control with Custom Styled Luxury Scroll */}
              <div className="flex flex-col self-stretch lg:self-auto min-w-0 max-w-full lg:max-w-[50%]">
                <div className="luxury-filter-scroll flex items-center gap-1.5 p-1.5 bg-[#12141c] rounded-xl border border-white/[0.08] overflow-x-auto max-w-full shadow-inner">
                  {['All', 'Villa', 'Waterfront Villa', 'Modern Estate', 'Multi-Level', 'Garden Estate', 'Penthouse Residence'].map((cat) => {
                    const isActive = activeCategoryFilter === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategoryFilter(cat)}
                        className={`relative px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                          isActive
                            ? 'bg-[#d6c7b2] text-[#08090b] font-semibold shadow-md'
                            : 'text-[#8e92a0] hover:text-[#f7f4ee] hover:bg-white/[0.04]'
                        }`}>
                        <span>{cat === 'All' ? 'All Residences (10)' : cat}</span>
                      </button>
                    );
                  })}
                </div>
                {/* Refined champagne gold scroll accent indicator under the filter bar */}
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#d6c7b2]/70 to-transparent mt-2 rounded-full opacity-90 shadow-[0_0_8px_rgba(214,199,178,0.5)]" />
              </div>
            </div>

            {/* Properties Grid: Rich 10-Property Multi-Card Architectural Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {filteredProperties.map((prop, idx) => (
                <div
                  key={prop.id}
                  className={`rounded-2xl bg-[#0f1118] border border-white/[0.09] hover:border-[#d6c7b2]/50 transition-all overflow-hidden flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 duration-300 ${
                    idx === 0 || idx === 1 ? 'md:col-span-1 lg:col-span-1' : ''
                  }`}>
                  
                  <div>
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-[#14161f]">
                      {cardBlueprintView[prop.id] ? (
                        <div className="w-full h-full relative bg-[#0a111a]">
                          <img
                            src={prop.blueprint.image}
                            alt={`${prop.title} CAD Blueprint`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-blue-950/20 backdrop-contrast-125 pointer-events-none" />
                          <div className="absolute bottom-3 left-3 bg-[#08090b]/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-[#d6c7b2] border border-[#d6c7b2]/30 flex items-center gap-1.5 z-10">
                            <Layers className="w-3 h-3 text-[#d6c7b2]" />
                            <span>{prop.blueprint.code} · {prop.blueprint.scale || '1:100 CAD'}</span>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={prop.image}
                          alt={prop.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1118] via-transparent to-black/30 pointer-events-none" />
                      
                      <div className="absolute top-4 left-4 max-w-[calc(100%-8.5rem)] flex items-center gap-2 bg-[#08090b]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.08] text-xs z-10">
                        <span className="font-semibold text-[#d6c7b2] whitespace-nowrap">{prop.category}</span>
                        <span className="text-[#555a68]">·</span>
                        <span className="text-[#f7f4ee] truncate min-w-0">{prop.neighborhood}</span>
                      </div>

                      {/* Photo vs CAD Blueprint view switcher pill */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#08090b]/90 backdrop-blur-md p-1 rounded-lg border border-white/[0.1] text-[10px] z-10 shadow-lg">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardBlueprintView(prev => ({ ...prev, [prop.id]: false }));
                          }}
                          className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                            !cardBlueprintView[prop.id] ? 'bg-[#d6c7b2] text-[#08090b] font-bold shadow-sm' : 'text-[#8e92a0] hover:text-[#f7f4ee]'
                          }`}>
                          Photo
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardBlueprintView(prev => ({ ...prev, [prop.id]: true }));
                          }}
                          className={`px-2 py-0.5 rounded cursor-pointer transition-all flex items-center gap-1 ${
                            cardBlueprintView[prop.id] ? 'bg-[#d6c7b2] text-[#08090b] font-bold shadow-sm' : 'text-[#8e92a0] hover:text-[#f7f4ee]'
                          }`}>
                          <Layers className="w-2.5 h-2.5" />
                          <span>CAD</span>
                        </button>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
                        <span className="font-serif-display text-lg sm:text-xl font-semibold text-[#f7f4ee]">
                          {prop.priceText}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setSelectedStudioPropId(prop.id);
                              setSelectedStudioLevel(0);
                              setStudioZoom(1);
                              scrollTo('blueprint-studio');
                            }}
                            className="bg-white/[0.08] hover:bg-white/[0.15] text-[#d6c7b2] font-semibold px-2.5 py-1.5 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 border border-[#d6c7b2]/30"
                            title="Inspect CAD in Blueprint Studio">
                            <Layers className="w-3 h-3 text-[#d6c7b2]" />
                            <span>CAD</span>
                          </button>
                          <button
                            onClick={() => {
                              setSelectedProperty(prop);
                              setModalTab('photos');
                            }}
                            className="bg-[#d6c7b2] text-[#08090b] font-semibold px-3 py-1.5 rounded-lg text-xs uppercase tracking-wider hover:bg-[#e8ded0] transition-colors cursor-pointer flex items-center gap-1 shadow-md">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Dossier</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      <div>
                        <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#f7f4ee] group-hover:text-[#d6c7b2] transition-colors">
                          {prop.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#c2b29c] mt-1 font-medium">
                          {prop.headline}
                        </p>
                      </div>

                      <p className="text-xs text-[#9ea2b0] leading-relaxed line-clamp-2">
                        {prop.description}
                      </p>

                      {/* Unboxed Specs with separators */}
                      <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#9ea2b0] border-y border-white/[0.06] py-3">
                        <span className="flex items-center gap-1.5">
                          <BedDouble className="w-4 h-4 text-[#d6c7b2]" />
                          <span>{prop.specs.beds} Beds</span>
                        </span>
                        <span aria-hidden="true" className="text-[#333744]">·</span>
                        <span className="flex items-center gap-1.5">
                          <Bath className="w-4 h-4 text-[#d6c7b2]" />
                          <span>{prop.specs.baths} Baths</span>
                        </span>
                        <span aria-hidden="true" className="text-[#333744]">·</span>
                        <span className="flex items-center gap-1.5">
                          <Maximize2 className="w-4 h-4 text-[#d6c7b2]" />
                          <span className="font-mono">{prop.specs.sqft}</span>
                        </span>
                        <span aria-hidden="true" className="text-[#333744]">·</span>
                        <span className="flex items-center gap-1.5">
                          <Compass className="w-4 h-4 text-[#d6c7b2]" />
                          <span>{prop.specs.facing.split(' ')[0]}</span>
                        </span>
                      </div>

                      {/* Blueprint Quick Tag */}
                      <div className="pt-1 flex items-center justify-between gap-3 text-xs">
                        <span className="text-[#787c8a] shrink-0">Blueprint:</span>
                        <button
                          onClick={() => {
                            setSelectedStudioPropId(prop.id);
                            setSelectedStudioLevel(0);
                            setStudioZoom(1);
                            scrollTo('blueprint-studio');
                          }}
                          className="min-w-0 text-[#d6c7b2] hover:text-[#f7f4ee] font-mono text-[11px] flex items-center gap-1.5 cursor-pointer bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.06] hover:border-[#d6c7b2]/40 transition-colors">
                          <Layers className="w-3 h-3 text-[#d6c7b2]" />
                          <span className="font-semibold">{prop.blueprint.code}</span>
                          <span className="text-[#555a68]">·</span>
                          <span className="truncate">{prop.blueprint.type}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 py-4 border-t border-white/[0.06] mt-1 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={getPropertyWhatsAppUrl(prop)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:text-[#46e681] transition-colors">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Dossier</span>
                    </a>

                    <button
                      onClick={() => {
                        setTourData(prev => ({ ...prev, propertyName: prop.title }));
                        setTourModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] rounded-lg transition-colors cursor-pointer shadow-md">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Tour</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            STAND-OUT VISUAL: INTERACTIVE ARCHITECTURAL CAD & BLUEPRINT STUDIO
           ========================================================================= */}
        <section id="blueprint-studio" className="py-16 sm:py-20 lg:py-28 bg-[#090b10] border-t border-white/[0.07] relative overflow-hidden">
          {/* Subtle architectural background watermark */}
          <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/[0.04] rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c2b29c]">
                  <Layers className="w-4 h-4 text-[#d6c7b2]" />
                  <span>10 Bespoke Engineering Blueprints · CAD Archive</span>
                </div>
                <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f4ee]">
                  Architectural Blueprint & Spatial Studio
                </h2>
                <p className="text-sm sm:text-base text-[#9ea2b0] leading-relaxed">
                  Every luxury residence in the Aura Living Nagpur collection features its own distinctive architectural blueprint, floorplan levels, and CAD dimension schematic. Select any property below to inspect its dedicated drawing.
                </p>
              </div>

              {/* Quick Tech Badge */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-[#d6c7b2] shrink-0 self-start md:self-auto">
                <Ruler className="w-4 h-4 text-[#d6c7b2]" />
                <span className="font-mono text-[11px]">AutoCAD / Revit Metric 1:100 Standards</span>
              </div>
            </div>

            {/* Property Selector Bar (Luxury horizontal tabs with gold scroll) */}
            <div className="mb-8">
              <div className="luxury-filter-scroll flex items-center gap-2 p-1.5 bg-[#12141d] rounded-xl border border-white/[0.08] overflow-x-auto">
                {FEATURED_PROPERTIES.map((p) => {
                  const isSelected = p.id === selectedStudioPropId;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedStudioPropId(p.id);
                        setSelectedStudioLevel(0);
                        setStudioZoom(1);
                      }}
                      className={`px-3.5 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2.5 shrink-0 ${
                        isSelected
                          ? 'bg-[#d6c7b2] text-[#08090b] font-semibold shadow-[0_0_15px_rgba(214,199,178,0.35)]'
                          : 'text-[#9ea2b0] hover:text-[#f7f4ee] hover:bg-white/[0.04]'
                      }`}>
                      <span className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-[#08090b]/20 text-[#08090b] font-bold' : 'bg-white/[0.05] text-[#d6c7b2]'
                      }`}>
                        {p.blueprint.code}
                      </span>
                      <span>{p.title}</span>
                    </button>
                  );
                })}
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#d6c7b2]/70 to-transparent mt-2 rounded-full opacity-90 shadow-[0_0_8px_rgba(214,199,178,0.5)]" />
            </div>

            {/* Interactive Blueprint Canvas & Specification Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Interactive CAD Blueprint Canvas */}
              <div className="lg:col-span-8 min-w-0 rounded-2xl bg-[#0c0f16] border border-white/[0.1] shadow-2xl overflow-hidden flex flex-col">
                
                {/* CAD Canvas Top Toolbar */}
                <div className="p-4 bg-[#11141e] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#46e681] animate-pulse" />
                    <span className="font-mono text-[#d6c7b2] font-bold text-xs">{studioProperty.blueprint.code}</span>
                    <span className="text-[#454958]">|</span>
                    <span className="text-[#f7f4ee] font-medium hidden sm:inline">{studioProperty.blueprint.type}</span>
                    <span className="text-[#454958] hidden sm:inline">|</span>
                    <span className="text-[#8e92a0] font-mono text-[11px]">{studioProperty.blueprint.scale || 'Scale 1:100'}</span>
                  </div>

                  {/* Zoom Controls */}
                  <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/[0.08]">
                    <button
                      onClick={() => setStudioZoom(z => Math.min(z + 0.25, 2.5))}
                      className="p-1.5 text-[#8e92a0] hover:text-[#f7f4ee] hover:bg-white/[0.08] rounded transition-colors cursor-pointer"
                      title="Zoom In">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono text-[#d6c7b2] px-1">{Math.round(studioZoom * 100)}%</span>
                    <button
                      onClick={() => setStudioZoom(z => Math.max(z - 0.25, 0.75))}
                      className="p-1.5 text-[#8e92a0] hover:text-[#f7f4ee] hover:bg-white/[0.08] rounded transition-colors cursor-pointer"
                      title="Zoom Out">
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setStudioZoom(1)}
                      className="p-1.5 text-[#8e92a0] hover:text-[#f7f4ee] hover:bg-white/[0.08] rounded transition-colors cursor-pointer"
                      title="Reset Zoom">
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[#333744]">|</span>
                    <button
                      onClick={() => {
                        setSelectedProperty(studioProperty);
                        setModalTab('blueprint');
                      }}
                      className="p-1.5 text-[#d6c7b2] hover:text-[#f7f4ee] hover:bg-white/[0.08] rounded transition-colors cursor-pointer flex items-center gap-1 text-[11px] font-semibold"
                      title="Inspect Fullscreen Blueprint">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Inspect</span>
                    </button>
                  </div>
                </div>

                {/* Blueprint Main Image Stage */}
                <div className="relative min-h-[340px] sm:min-h-[480px] bg-[#070d18] overflow-hidden flex items-center justify-center px-4 py-16 sm:p-4">
                  {/* Blueprint fine grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b2b48_1px,transparent_1px),linear-gradient(to_bottom,#1b2b48_1px,transparent_1px)] bg-[size:28px_28px] opacity-20 pointer-events-none" />
                  
                  <img
                    src={studioProperty.blueprint.image}
                    alt={`${studioProperty.title} Dedicated Blueprint CAD`}
                    style={{ transform: `scale(${studioZoom})` }}
                    className="max-h-[500px] w-auto max-w-full object-contain transition-transform duration-300 select-none shadow-2xl rounded-lg"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top-Left CAD Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 max-w-[calc(100%-1.5rem)] sm:max-w-[55%] bg-[#08090b]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.1] text-xs">
                    <span className="text-[#d6c7b2] font-mono font-bold block truncate">{studioProperty.title}</span>
                    <span className="text-[11px] text-[#8e92a0]">{studioProperty.neighborhood}, Nagpur</span>
                  </div>

                  {/* Top-Right Compass Orientation Indicator */}
                  <div className="absolute top-4 right-4 bg-[#08090b]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.1] text-xs hidden sm:flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#d6c7b2]" />
                    <span className="font-mono text-[11px] text-[#f7f4ee]">{studioProperty.specs.facing}</span>
                  </div>

                  {/* Bottom-Left Cadastral Stamp */}
                  <div className="absolute bottom-4 left-4 bg-[#08090b]/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono text-[#8e92a0] border border-white/[0.08] hidden xl:block">
                    AURA LIVING ARCHITECTURAL SPECIFICATION · NAGPUR ARCHIVE
                  </div>

                  {/* Bottom-Right Level Indicator */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 max-w-[calc(100%-1.5rem)] truncate bg-[#08090b]/90 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-[#d6c7b2] border border-[#d6c7b2]/30">
                    Active: {studioProperty.blueprint.levels[selectedStudioLevel]?.levelName || 'Primary Level'}
                  </div>
                </div>

                {/* CAD Canvas Bottom Level Switcher */}
                <div className="p-3 bg-[#11141e] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                    <span className="text-[#8e92a0] text-xs uppercase tracking-wider font-semibold shrink-0">Switch Floorplan Level:</span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {studioProperty.blueprint.levels.map((lvl, lidx) => (
                        <button
                          key={lidx}
                          onClick={() => setSelectedStudioLevel(lidx)}
                          className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                            selectedStudioLevel === lidx
                              ? 'bg-[#d6c7b2] text-[#08090b] font-bold shadow'
                              : 'bg-white/[0.04] text-[#9ea2b0] hover:text-[#f7f4ee] hover:bg-white/[0.08]'
                          }`}>
                          {lvl.levelName}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProperty(studioProperty);
                      setModalTab('blueprint');
                    }}
                    className="text-xs text-[#d6c7b2] hover:underline flex items-center gap-1 font-mono cursor-pointer">
                    <span>Full Spatial Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* Right Column: Architectural Intelligence & Dimension Callouts */}
              <div className="lg:col-span-4 space-y-5 min-w-0">
                
                {/* Active Level Spatial Breakdown Card */}
                <div className="p-6 rounded-2xl bg-[#0f1118] border border-white/[0.1] space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div>
                      <span className="text-[11px] font-mono text-[#d6c7b2] uppercase tracking-wider block">Selected Level Layout</span>
                      <h4 className="text-base font-semibold text-[#f7f4ee]">
                        {studioProperty.blueprint.levels[selectedStudioLevel]?.levelName || 'Primary Level'}
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-[#c2b29c] border border-white/[0.06]">
                      {studioProperty.specs.sqft}
                    </span>
                  </div>

                  <p className="text-xs text-[#9ea2b0] leading-relaxed">
                    {studioProperty.blueprint.levels[selectedStudioLevel]?.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase tracking-widest text-[#787c8a] font-semibold block">
                      Key Rooms & Dimension Allocations:
                    </span>
                    <div className="space-y-1.5">
                      {studioProperty.blueprint.levels[selectedStudioLevel]?.keyRooms.map((room, ridx) => (
                        <div key={ridx} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs">
                          <span className="flex items-center gap-2 text-[#f7f4ee]">
                            <Check className="w-3.5 h-3.5 text-[#d6c7b2] shrink-0" />
                            <span>{room}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Specification Summary Card */}
                <div className="p-6 rounded-2xl bg-[#0f1118] border border-white/[0.1] space-y-3.5 shadow-xl text-xs">
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#c2b29c]">
                    Engineering Specifications
                  </h4>

                  <div className="space-y-2 text-[#9ea2b0]">
                    <div className="flex justify-between gap-4 py-1 border-b border-white/[0.04]">
                      <span>Drawing Archive Code</span>
                      <span className="font-mono text-[#d6c7b2] font-semibold">{studioProperty.blueprint.code}</span>
                    </div>
                    <div className="flex justify-between gap-4 py-1 border-b border-white/[0.04]">
                      <span>Ceiling Volume</span>
                      <span className="text-[#f7f4ee] font-semibold">{studioProperty.specs.ceilingHeight}</span>
                    </div>
                    <div className="flex justify-between gap-4 py-1 border-b border-white/[0.04]">
                      <span>Cardinal Facing</span>
                      <span className="text-[#f7f4ee] font-semibold">{studioProperty.specs.facing}</span>
                    </div>
                    <div className="flex justify-between gap-4 py-1 border-b border-white/[0.04]">
                      <span>Carpet Area</span>
                      <span className="font-mono text-[#f7f4ee] font-semibold">{studioProperty.specs.sqft}</span>
                    </div>
                    <div className="flex justify-between gap-4 py-1">
                      <span>RERA Schedule</span>
                      <span className="text-[#46e681] font-semibold text-right">Nagpur RERA Compliant</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 space-y-2.5">
                    <a
                      href={getPropertyWhatsAppUrl(studioProperty)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#34e275] text-[#08090b] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md">
                      <MessageSquare className="w-4 h-4 text-[#08090b]" />
                      <span>Request CAD Drawing & PDF</span>
                    </a>

                    <button
                      onClick={() => {
                        setTourData(prev => ({ ...prev, propertyName: studioProperty.title }));
                        setTourModalOpen(true);
                      }}
                      className="w-full py-3 px-4 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#f7f4ee] border border-white/[0.09] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      <Calendar className="w-4 h-4 text-[#d6c7b2]" />
                      <span>Book On-Site Architectural Tour</span>
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            STAND-OUT VISUAL: INTERACTIVE PROPERTY COMPARISON MATRIX
           ========================================================================= */}
        <section id="comparison" className="py-16 sm:py-20 lg:py-28 bg-[#0b0d12] border-t border-white/[0.07] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c2b29c]">
                  <GitCompare className="w-4 h-4 text-[#d6c7b2]" />
                  <span>Architectural Specification Matrix</span>
                </div>
                <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#f7f4ee]">
                  Compare Downtown Residences Side-by-Side
                </h2>
                <p className="text-sm text-[#9ea2b0]">
                  Evaluate spatial geometry, ceiling heights, cardinal sun orientations, and location advantages across any two luxury residences.
                </p>
              </div>

              {/* Selector dropdowns */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
                <select
                  value={comparePropA}
                  onChange={(e) => setComparePropA(e.target.value)}
                  className="w-full sm:flex-1 lg:flex-none lg:w-auto px-3.5 py-2.5 rounded-lg bg-[#141620] border border-white/[0.1] text-xs text-[#f7f4ee] focus:border-[#d6c7b2] focus:outline-none">
                  {FEATURED_PROPERTIES.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
                <span className="text-xs text-[#d6c7b2] font-semibold text-center">VS</span>
                <select
                  value={comparePropB}
                  onChange={(e) => setComparePropB(e.target.value)}
                  className="w-full sm:flex-1 lg:flex-none lg:w-auto px-3.5 py-2.5 rounded-lg bg-[#141620] border border-white/[0.1] text-xs text-[#f7f4ee] focus:border-[#d6c7b2] focus:outline-none">
                  {FEATURED_PROPERTIES.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Comparison Side-by-Side Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Residence A */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[#0f1118] border border-white/[0.09] space-y-6 shadow-2xl min-w-0">
                <div className="flex items-start gap-4">
                  <img
                    src={propertyA.image}
                    alt={propertyA.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0 border border-white/[0.08]"
                  />
                  <div>
                    <span className="text-xs text-[#d6c7b2] font-semibold">{propertyA.category} · {propertyA.neighborhood}</span>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#f7f4ee] mt-0.5">{propertyA.title}</h3>
                    <p className="text-xs text-[#9ea2b0] mt-1 line-clamp-2">{propertyA.headline}</p>
                  </div>
                </div>

                {/* Residence A Blueprint Preview */}
                <div className="rounded-xl overflow-hidden border border-[#d6c7b2]/20 bg-[#080d16] p-3 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-[#d6c7b2] font-semibold flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#d6c7b2]" />
                      <span>{propertyA.blueprint.code} Schematic</span>
                    </span>
                    <span className="text-[#8e92a0] font-mono">{propertyA.blueprint.scale || '1:100 Metric'}</span>
                  </div>
                  <div 
                    className="relative h-28 rounded-lg overflow-hidden bg-[#05080e] group cursor-pointer border border-white/[0.06]"
                    onClick={() => {
                      setSelectedProperty(propertyA);
                      setModalTab('blueprint');
                    }}>
                    <img
                      src={propertyA.blueprint.image}
                      alt={`${propertyA.title} CAD Blueprint`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors pointer-events-none" />
                    <div className="absolute bottom-2 left-2 bg-[#08090b]/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-[#f7f4ee] font-mono">
                      {propertyA.blueprint.levels.length} Architectural Levels
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/[0.06] text-xs">
                  <div className="flex justify-between gap-4 py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8e92a0]">Blueprint Code</span>
                    <span className="font-mono font-bold text-[#d6c7b2]">{propertyA.blueprint.code}</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8e92a0]">Carpet Built-Up Area</span>
                    <span className="font-mono font-bold text-[#f7f4ee]">{propertyA.specs.sqft}</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8e92a0]">Bedrooms & Master Suites</span>
                    <span className="font-semibold text-[#f7f4ee]">{propertyA.specs.beds} Master Suites</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8e92a0]">Ceiling Volume Height</span>
                    <span className="font-semibold text-[#d6c7b2]">{propertyA.specs.ceilingHeight}</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8e92a0]">Cardinal Orientation</span>
                    <span className="font-semibold text-[#f7f4ee]">{propertyA.specs.facing}</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5">
                    <span className="text-[#8e92a0]">Motor Court Parking</span>
                    <span className="font-semibold text-[#f7f4ee]">{propertyA.specs.parking} Covered Stalls</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setSelectedProperty(propertyA);
                      setModalTab('blueprint');
                    }}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>View {propertyA.blueprint.code} Blueprint</span>
                  </button>
                  <a
                    href={getPropertyWhatsAppUrl(propertyA)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#25D366] hover:underline flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Residence B */}
              <div className="p-5 sm:p-7 rounded-2xl bg-[#0f1118] border border-white/[0.09] space-y-6 shadow-2xl min-w-0">
                <div className="flex items-start gap-4">
                  <img
                    src={propertyB.image}
                    alt={propertyB.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0 border border-white/[0.08]"
                  />
                  <div>
                    <span className="text-xs text-[#d6c7b2] font-semibold">{propertyB.category} · {propertyB.neighborhood}</span>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#f7f4ee] mt-0.5">{propertyB.title}</h3>
                    <p className="text-xs text-[#9ea2b0] mt-1 line-clamp-2">{propertyB.headline}</p>
                  </div>
                </div>

                {/* Residence B Blueprint Preview */}
                <div className="rounded-xl overflow-hidden border border-[#d6c7b2]/20 bg-[#080d16] p-3 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-[#d6c7b2] font-semibold flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#d6c7b2]" />
                      <span>{propertyB.blueprint.code} Schematic</span>
                    </span>
                    <span className="text-[#8e92a0] font-mono">{propertyB.blueprint.scale || '1:100 Metric'}</span>
                  </div>
                  <div 
                    className="relative h-28 rounded-lg overflow-hidden bg-[#05080e] group cursor-pointer border border-white/[0.06]"
                    onClick={() => {
                      setSelectedProperty(propertyB);
                      setModalTab('blueprint');
                    }}>
                    <img
                      src={propertyB.blueprint.image}
                      alt={`${propertyB.title} CAD Blueprint`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors pointer-events-none" />
                    <div className="absolute bottom-2 left-2 bg-[#08090b]/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-[#f7f4ee] font-mono">
                      {propertyB.blueprint.levels.length} Architectural Levels
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/[0.06] text-xs">
                  <div className="flex justify-between gap-4 py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8e92a0]">Blueprint Code</span>
                    <span className="font-mono font-bold text-[#d6c7b2]">{propertyB.blueprint.code}</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8e92a0]">Carpet Built-Up Area</span>
                    <span className="font-mono font-bold text-[#f7f4ee]">{propertyB.specs.sqft}</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8e92a0]">Bedrooms & Master Suites</span>
                    <span className="font-semibold text-[#f7f4ee]">{propertyB.specs.beds} Master Suites</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8e92a0]">Ceiling Volume Height</span>
                    <span className="font-semibold text-[#d6c7b2]">{propertyB.specs.ceilingHeight}</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8e92a0]">Cardinal Orientation</span>
                    <span className="font-semibold text-[#f7f4ee]">{propertyB.specs.facing}</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5">
                    <span className="text-[#8e92a0]">Motor Court Parking</span>
                    <span className="font-semibold text-[#f7f4ee]">{propertyB.specs.parking} Covered Stalls</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setSelectedProperty(propertyB);
                      setModalTab('blueprint');
                    }}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>View {propertyB.blueprint.code} Blueprint</span>
                  </button>
                  <a
                    href={getPropertyWhatsAppUrl(propertyB)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#25D366] hover:underline flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            STAND-OUT VISUAL: ARCHITECTURAL MATERIAL FINISHES & CRAFTSMANSHIP
           ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#08090b] border-t border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-10 sm:mb-14 space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#c2b29c] block">
                Engineering & Craftsmanship Standards
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f4ee]">
                Architectural Finishes that Define Aura Living
              </h2>
              <p className="text-sm sm:text-base text-[#9ea2b0]">
                Every residence in our Nagpur portfolio is audited against stringent architectural specifications to guarantee longevity, acoustic serenity, and thermal efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-2xl bg-[#0f1118] border border-white/[0.08] space-y-3 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-[#d6c7b2]">
                  <Sparkles className="w-5 h-5 text-[#d6c7b2]" />
                </div>
                <h3 className="text-base font-semibold text-[#f7f4ee]">Roman Travertine & Marble</h3>
                <p className="text-xs text-[#8e92a0] leading-relaxed">
                  Bookmatched natural Italian travertine slabs, quartzite bathroom vanities, and unpolished honed textures that resist Nagpur’s summer heat.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0f1118] border border-white/[0.08] space-y-3 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-[#d6c7b2]">
                  <ShieldCheck className="w-5 h-5 text-[#d6c7b2]" />
                </div>
                <h3 className="text-base font-semibold text-[#f7f4ee]">Triple-Glazed Acoustic Envelope</h3>
                <p className="text-xs text-[#8e92a0] leading-relaxed">
                  Low-E insulated glass units achieving STC 44 acoustic isolation, blocking urban ambient frequencies while maximizing natural northern light.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0f1118] border border-white/[0.08] space-y-3 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-[#d6c7b2]">
                  <Compass className="w-5 h-5 text-[#d6c7b2]" />
                </div>
                <h3 className="text-base font-semibold text-[#f7f4ee]">Submerged Aquatic Illumination</h3>
                <p className="text-xs text-[#8e92a0] leading-relaxed">
                  Fibre-optic and architectural pool uplighting integrated seamlessly into negative-edge granite coping and linear water gardens.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0f1118] border border-white/[0.08] space-y-3 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-[#d6c7b2]">
                  <KeyRound className="w-5 h-5 text-[#d6c7b2]" />
                </div>
                <h3 className="text-base font-semibold text-[#f7f4ee]">Crestron & Lutron Automation</h3>
                <p className="text-xs text-[#8e92a0] leading-relaxed">
                  Circadian lighting temperature adjustment, automated biometric gate access, and discreet climate zoning controlled from any smartphone.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            INTERACTIVE ACQUISITION & INVESTMENT ESTIMATOR (BESPOKE TOOL)
           ========================================================================= */}
        <section id="estimator" className="py-16 sm:py-20 lg:py-28 bg-[#0b0d12] border-t border-white/[0.07] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Estimator Explanation */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c2b29c]">
                  <Calculator className="w-4 h-4 text-[#d6c7b2]" />
                  <span>Financial Intelligence</span>
                </div>
                
                <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#f7f4ee]">
                  Nagpur Luxury Property Acquisition Estimator
                </h2>

                <p className="text-sm text-[#9ea2b0] leading-relaxed">
                  Real estate in Nagpur’s prime enclaves (Civil Lines, Ramdaspeth, Wardha Road) has demonstrated consistent capital appreciation. Use this interactive tool to model acquisition costs, Maharashtra stamp duties, and projected equity appreciation with Aura Living.
                </p>

                <div className="space-y-3 pt-2 text-xs text-[#8e92a0]">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <strong className="text-[#f7f4ee] block mb-0.5">Government Stamp Duty & Registration</strong>
                    <span>Calculated at 7% total (Maharashtra State Stamp Duty + Local Metro Cess & Registration fees).</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <strong className="text-[#f7f4ee] block mb-0.5">Historical Capital Growth Metric</strong>
                    <span>Modeled at a conservative 8.4% annualized appreciation rate observed in downtown Nagpur luxury residences.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(`Hello Aura Living, I would like to receive an official financial & tax acquisition dossier for a ₹${calculatorBudgetCr} Cr luxury home in Nagpur.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] rounded-lg transition-colors">
                    <MessageSquare className="w-4 h-4 text-[#08090b]" />
                    <span>Request Custom Financial Dossier</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Sliders & Live Results Dashboard */}
              <div className="lg:col-span-7">
                <div className="p-5 sm:p-9 rounded-2xl bg-[#11131b] border border-white/[0.1] shadow-2xl space-y-7">
                  
                  {/* Slider 1: Property Valuation */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
                      <span className="text-[#c2b29c]">Estimated Property Value (INR)</span>
                      <span className="font-mono text-base sm:text-lg text-[#d6c7b2] whitespace-nowrap">₹{calculatorBudgetCr.toFixed(1)} Crore</span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="25"
                      step="0.5"
                      value={calculatorBudgetCr}
                      onChange={(e) => setCalculatorBudgetCr(parseFloat(e.target.value))}
                      className="w-full h-2 rounded-lg bg-[#1f222c] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#6b7080] font-mono">
                      <span>₹4.0 Cr</span>
                      <span>₹14.0 Cr</span>
                      <span>₹25.0 Cr</span>
                    </div>
                  </div>

                  {/* Slider 2: Holding Horizon */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
                      <span className="text-[#c2b29c]">Investment Horizon</span>
                      <span className="font-mono text-base sm:text-lg text-[#d6c7b2] whitespace-nowrap">{holdingYears} Years</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="10"
                      step="1"
                      value={holdingYears}
                      onChange={(e) => setHoldingYears(parseInt(e.target.value))}
                      className="w-full h-2 rounded-lg bg-[#1f222c] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#6b7080] font-mono">
                      <span>3 Years</span>
                      <span>5 Years</span>
                      <span>10 Years</span>
                    </div>
                  </div>

                  {/* Output Breakdown Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[11px] text-[#8e92a0] uppercase tracking-wider block mb-1">
                        Est. Stamp Duty & Fees
                      </span>
                      <span className="font-mono text-xl lg:text-lg xl:text-xl font-bold text-[#f7f4ee]">
                        ₹{stampDutyAndReg} Cr
                      </span>
                      <span className="text-[10px] text-[#6b7080] block mt-0.5">Approx 7% Maharashtra</span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[11px] text-[#8e92a0] uppercase tracking-wider block mb-1">
                        Projected {holdingYears}-Yr Value
                      </span>
                      <span className="font-mono text-xl lg:text-lg xl:text-xl font-bold text-[#d6c7b2]">
                        ₹{futureValue} Cr
                      </span>
                      <span className="text-[10px] text-[#6b7080] block mt-0.5">At 8.4% YoY CAGR</span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[11px] text-[#8e92a0] uppercase tracking-wider block mb-1">
                        Projected Capital Gain
                      </span>
                      <span className="font-mono text-xl lg:text-lg xl:text-xl font-bold text-[#4ade80]">
                        +₹{capitalGain} Cr
                      </span>
                      <span className="text-[10px] text-[#6b7080] block mt-0.5">Estimated appreciation</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#6b7080] italic leading-relaxed">
                    * Projections for illustrative guidance only. Actual appreciation in Nagpur varies by neighborhood zoning, builder specifications, and land frontage.
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            4. SERVICES SECTION: SELLING LUXURY HOMES
           ========================================================================= */}
        <section id="services" className="py-16 sm:py-24 lg:py-32 bg-[#08090b] border-t border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-10 sm:mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c2b29c]">
                <Award className="w-4 h-4 text-[#d6c7b2]" />
                <span>Specialized Mandate: Selling</span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f4ee]">
                Selling Luxury Homes in Nagpur with Aura Living
              </h2>
              <p className="text-base text-[#9ea2b0] leading-relaxed">
                Selling a distinguished residence demands far more than casual portal postings. Aura Living provides an elite, discreet selling advisory that matches your property with verified High-Net-Worth Individuals and institutional buyers.
              </p>
            </div>

            {/* Selling Capabilities Bento-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 xl:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] hover:border-[#d6c7b2]/40 transition-all flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="font-mono text-xs font-bold text-[#d6c7b2] tracking-widest mb-4">
                    01. PRECISION
                  </div>
                  <h3 className="text-lg font-semibold text-[#f7f4ee] mb-2.5">
                    Architectural & Market Valuation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8e92a0] leading-relaxed">
                    We evaluate your home’s architectural uniqueness, plot frontage, construction specification, and micro-market sales comps across Nagpur to establish an authoritative asking valuation.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-[#c2b29c] font-medium flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#d6c7b2]" />
                  <span>Data-driven Nagpur pricing</span>
                </div>
              </div>

              <div className="p-6 xl:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] hover:border-[#d6c7b2]/40 transition-all flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="font-mono text-xs font-bold text-[#d6c7b2] tracking-widest mb-4">
                    02. PRESENTATION
                  </div>
                  <h3 className="text-lg font-semibold text-[#f7f4ee] mb-2.5">
                    High-Production Tech Showcases
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8e92a0] leading-relaxed">
                    Where modern technology meets real estate: We create editorial photography, 4K cinematic walkthroughs, and bespoke 3D CAD blueprints that capture the emotional magnitude of your residence.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-[#c2b29c] font-medium flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#d6c7b2]" />
                  <span>3D CAD blueprints</span>
                </div>
              </div>

              <div className="p-6 xl:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] hover:border-[#d6c7b2]/40 transition-all flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="font-mono text-xs font-bold text-[#d6c7b2] tracking-widest mb-4">
                    03. BUYER MATCHING
                  </div>
                  <h3 className="text-lg font-semibold text-[#f7f4ee] mb-2.5">
                    Qualified HNI & NRI Buyer Network
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8e92a0] leading-relaxed">
                    Direct access to serious homebuyers, corporate promoters, medical leaders, and overseas NRIs seeking prime real estate in Nagpur. Zero casual lookers or unqualified traffic.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-[#c2b29c] font-medium flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-[#d6c7b2]" />
                  <span>Pre-screened verified buyers</span>
                </div>
              </div>

              <div className="p-6 xl:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] hover:border-[#d6c7b2]/40 transition-all flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="font-mono text-xs font-bold text-[#d6c7b2] tracking-widest mb-4">
                    04. CONVEYANCING
                  </div>
                  <h3 className="text-lg font-semibold text-[#f7f4ee] mb-2.5">
                    Discreet Legal & Escrow Advisory
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8e92a0] leading-relaxed">
                    Complete guidance on title verification, registration procedures, tax efficiency, and transparent deal structuring under Maharashtra real estate frameworks.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-[#c2b29c] font-medium flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-[#d6c7b2]" />
                  <span>Zero legal friction</span>
                </div>
              </div>

            </div>

            {/* Seller Action Strip */}
            <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-[#11131c] border border-white/[0.09] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-2 text-center lg:text-left">
                <h4 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#f7f4ee]">
                  Considering selling your luxury home or downtown house in Nagpur?
                </h4>
                <p className="text-xs sm:text-sm text-[#8e92a0] max-w-2xl">
                  Schedule an in-person, confidential valuation session with Aura Living. We evaluate your property on-site and present a personalized marketing roadmap.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSellModalOpen(true);
                    setSellSubmitted(false);
                  }}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] rounded-lg transition-all whitespace-nowrap cursor-pointer shadow-lg">
                  Request Home Valuation
                </button>
                <a
                  href={getWhatsAppUrl("Hello Aura Living, I own a luxury home in Nagpur and would like to discuss selling it through your private advisory.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#25D366] bg-[#141822] hover:bg-[#1a202e] border border-[#25D366]/30 rounded-lg transition-all whitespace-nowrap flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Advisory</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. ABOUT SECTION - AURA LIVING
           ========================================================================= */}
        <section id="about" className="py-16 sm:py-24 lg:py-32 bg-[#0b0d12] border-t border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Visual Showcase */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl group">
                  <img
                    src={curatedLiving}
                    alt="Interior of modern luxury residence curated by Aura Living in Nagpur"
                    className="w-full h-[380px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-xs text-[#9ea2b0] bg-[#0c0e14]/90 backdrop-blur-xl p-5 rounded-xl border border-white/[0.08]">
                    <span className="font-semibold text-[#d6c7b2] block mb-1">
                      Our Operating Standard in Nagpur
                    </span>
                    We represent only certified, high-grade residential properties characterized by clear titles, exceptional build craft, and enduring architectural merit.
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial About Content */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#c2b29c] block">
                  About Aura Living
                </span>
                
                <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f4ee]">
                  Where modern technology meets your dream home.
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#9ea2b0] leading-relaxed">
                  <p>
                    <strong className="text-[#f7f4ee]">Aura Living</strong> was founded to establish a bespoke, tech-enabled benchmark for luxury real estate advisory in <strong className="text-[#f7f4ee]">Nagpur, India</strong>. In an era where discerning buyers and sellers demand speed, absolute discretion, and transparent verification, we remove traditional broker barriers.
                  </p>
                  <p>
                    Specializing in <strong className="text-[#d6c7b2]">Luxury Homes</strong> and <strong className="text-[#d6c7b2]">Downtown Luxury houses</strong>, we unite localized market intelligence with modern digital tools—instant WhatsApp access, immersive architectural dossiers, and structured viewing workflows.
                  </p>
                  <p>
                    Whether you are an established industrialist family transitioning to a new private manor, an NRI investor seeking growth corridor assets in Nagpur, or a luxury property owner looking for an elite selling partner, Aura Living delivers world-class service.
                  </p>
                </div>

                {/* Local Credibility Pillars */}
                <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#d6c7b2]">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#d6c7b2] shrink-0" />
                    <div>
                      <strong className="text-[#f7f4ee] block">100% Vetted Legal Titles</strong>
                      <span>Zero ambiguities or encumbrances</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#d6c7b2] shrink-0" />
                    <div>
                      <strong className="text-[#f7f4ee] block">Rapid & Discreet Communication</strong>
                      <span>Direct line to senior decision-makers</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            6. WHY CHOOSE US SECTION
           ========================================================================= */}
        <section id="why-choose-us" className="py-16 sm:py-24 lg:py-32 bg-[#08090b] border-t border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#c2b29c] block">
                Why Aura Living
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f4ee]">
                The Luxury Real Estate Difference
              </h2>
              <p className="text-sm sm:text-base text-[#9ea2b0]">
                Four decisive advantages that position Aura Living as the premier luxury real estate advisory in Nagpur, India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 xl:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] hover:border-[#d6c7b2]/40 transition-all space-y-4 group shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#d6c7b2] group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 text-[#d6c7b2]" />
                </div>
                <h3 className="text-lg font-semibold text-[#f7f4ee]">
                  Local Nagpur Mastery
                </h3>
                <p className="text-xs sm:text-sm text-[#8e92a0] leading-relaxed">
                  Decades of collective ground intelligence across Civil Lines, Ramdaspeth, Dharampeth, and Wardha Road corridor. We understand historical value appreciation and upcoming urban infrastructure.
                </p>
              </div>

              <div className="p-6 xl:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] hover:border-[#d6c7b2]/40 transition-all space-y-4 group shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#d6c7b2] group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6 text-[#d6c7b2]" />
                </div>
                <h3 className="text-lg font-semibold text-[#f7f4ee]">
                  Tech-Forward Advisory
                </h3>
                <p className="text-xs sm:text-sm text-[#8e92a0] leading-relaxed">
                  True to our motto—where modern technology meets your dream home—we utilize digital floorplans, high-res aerial surveys, and instantaneous WhatsApp confirmations to save your valuable time.
                </p>
              </div>

              <div className="p-6 xl:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] hover:border-[#d6c7b2]/40 transition-all space-y-4 group shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#d6c7b2] group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6 text-[#d6c7b2]" />
                </div>
                <h3 className="text-lg font-semibold text-[#f7f4ee]">
                  Premium Listings Only
                </h3>
                <p className="text-xs sm:text-sm text-[#8e92a0] leading-relaxed">
                  We rigorously decline substandard or disputed listings. When you view a Downtown Luxury house represented by Aura Living, you are guaranteed premier architecture, elite neighborhoods, and complete peace of mind.
                </p>
              </div>

              <div className="p-6 xl:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] hover:border-[#d6c7b2]/40 transition-all space-y-4 group shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#d6c7b2] group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-[#d6c7b2]" />
                </div>
                <h3 className="text-lg font-semibold text-[#f7f4ee]">
                  Fast & Personalized Service
                </h3>
                <p className="text-xs sm:text-sm text-[#8e92a0] leading-relaxed">
                  No automated chatbots or impersonal call centers. Call 8007678916 to reach dedicated consultants who coordinate private viewings with complete discretion around your busy calendar.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            7. TESTIMONIALS SECTION
           ========================================================================= */}
        <section className="py-16 sm:py-24 lg:py-32 bg-[#0b0d12] border-t border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16 space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#c2b29c] block">
                Client Experiences
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f4ee]">
                Endorsed by Nagpur Homeowners & Buyers
              </h2>
              <p className="text-sm sm:text-base text-[#9ea2b0]">
                Grounded reflections on trust, responsiveness, and results from families and investors represented by Aura Living.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] flex flex-col justify-between space-y-6 shadow-xl">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-[#d6c7b2] uppercase tracking-wider">
                    Sold Luxury Villa · Ramdaspeth, Nagpur
                  </div>
                  <p className="text-xs sm:text-sm text-[#c6c8d4] leading-relaxed italic">
                    "When we decided to sell our downtown family residence in Ramdaspeth, privacy was our highest priority. Aura Living managed the entire selling mandate with absolute discretion. They brought three fully vetted buyers and closed the transaction at our target price in under a month."
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="font-semibold text-sm text-[#f7f4ee]">Dr. Rajesh & Sunita Deshmukh</div>
                  <div className="text-xs text-[#8e92a0]">Senior Medical Director · Nagpur</div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] flex flex-col justify-between space-y-6 shadow-xl">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-[#d6c7b2] uppercase tracking-wider">
                    Acquired Downtown House · Civil Lines, Nagpur
                  </div>
                  <p className="text-xs sm:text-sm text-[#c6c8d4] leading-relaxed italic">
                    "Their tagline 'Where modern technology meets your dream home' is genuinely true. We received comprehensive digital walkthroughs and architectural specs before even visiting the site. When we did tour with Aura Living, the home surpassed our expectations. Outstanding professionalism."
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="font-semibold text-sm text-[#f7f4ee]">Vikramaditya Singhania</div>
                  <div className="text-xs text-[#8e92a0]">Managing Director, Industrial Manufacturing · Nagpur</div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1118] border border-white/[0.08] flex flex-col justify-between space-y-6 shadow-xl">
                <div className="space-y-4">
                  <div className="text-xs font-mono text-[#d6c7b2] uppercase tracking-wider">
                    Overseas Buyer · Luxury Estate in Nagpur
                  </div>
                  <p className="text-xs sm:text-sm text-[#c6c8d4] leading-relaxed italic">
                    "Living in Dubai and buying real estate in Nagpur felt risky until we connected with Aura Living. They coordinated everything over WhatsApp and video calls—title verification, builder credentials, and contract reviews. Their responsiveness at 8007678916 was unmatched."
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="font-semibold text-sm text-[#f7f4ee]">Ananya & Rohit Kulkarni</div>
                  <div className="text-xs text-[#8e92a0]">Fintech VP & Technology Consultant · Dubai / Nagpur</div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            8. AREA / MARKET SECTION: NAGPUR, INDIA (INTERACTIVE NEIGHBORHOOD EXPLORER)
           ========================================================================= */}
        <section id="market-area" className="py-16 sm:py-24 lg:py-32 bg-[#08090b] border-t border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Interactive Neighborhood Navigator */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c2b29c]">
                  <MapPin className="w-4 h-4 text-[#d6c7b2]" />
                  <span>Interactive Regional Intelligence</span>
                </div>
                
                <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f4ee]">
                  Nagpur: India’s Prime Growth Epicenter
                </h2>

                <p className="text-sm sm:text-base text-[#9ea2b0] leading-relaxed">
                  As the winter capital of Maharashtra and the geographical heart of India, Nagpur is undergoing an unprecedented renaissance in high-end residential architecture and lifestyle infrastructure.
                </p>

                {/* Neighborhood Selector Tabs */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {NAGPUR_NEIGHBORHOODS.map((nh, idx) => (
                    <button
                      key={nh.name}
                      onClick={() => setActiveNeighborhood(idx)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        activeNeighborhood === idx
                          ? 'bg-[#d6c7b2] text-[#08090b] font-semibold shadow-md'
                          : 'bg-white/[0.03] text-[#8e92a0] hover:text-[#f7f4ee] border border-white/[0.06]'
                      }`}>
                      {nh.name}
                    </button>
                  ))}
                </div>

                {/* Active Neighborhood Card Details */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#0f1118] border border-white/[0.09] space-y-4 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-serif-display font-semibold text-[#f7f4ee]">
                        {NAGPUR_NEIGHBORHOODS[activeNeighborhood].name}
                      </h3>
                      <p className="text-xs text-[#d6c7b2]">
                        {NAGPUR_NEIGHBORHOODS[activeNeighborhood].tagline}
                      </p>
                    </div>
                    <span className="self-start sm:self-auto shrink-0 font-mono text-xs text-[#d6c7b2] bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.08]">
                      {NAGPUR_NEIGHBORHOODS[activeNeighborhood].priceRange}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#9ea2b0] leading-relaxed">
                    {NAGPUR_NEIGHBORHOODS[activeNeighborhood].vibe}
                  </p>

                  <div className="pt-2 border-t border-white/[0.06] space-y-1.5">
                    {NAGPUR_NEIGHBORHOODS[activeNeighborhood].highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#c2b29c]">
                        <Check className="w-3.5 h-3.5 text-[#d6c7b2]" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=Nagpur,+Maharashtra,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#d6c7b2] bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] rounded-md transition-colors">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>View Nagpur on Google Maps</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(`Hello Aura Living, what are the current off-market luxury listings available in ${NAGPUR_NEIGHBORHOODS[activeNeighborhood].name}, Nagpur?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#25D366] bg-[#121620] hover:bg-[#181e2b] border border-[#25D366]/30 rounded-md transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Ask Available Properties</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Google Maps Dark Iframe */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#11131b] p-2.5 shadow-2xl">
                  <div className="relative w-full h-[340px] sm:h-[460px] rounded-xl overflow-hidden bg-[#161822]">
                    <iframe
                      title="Nagpur Maharashtra Luxury Real Estate Map"
                      src="https://maps.google.com/maps?q=Nagpur,+Maharashtra,+India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      className="border-0 filter invert-[90%] hue-rotate-[180%] contrast-[110%]"
                      loading="lazy"
                    />
                    
                    <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#08090b]/90 backdrop-blur-md p-3.5 rounded-lg border border-white/[0.08] text-xs space-y-1">
                      <div className="flex items-center gap-2 text-[#d6c7b2] font-semibold">
                        <MapPin className="w-4 h-4 text-[#d6c7b2]" />
                        <span>Aura Living Hub · Nagpur, India</span>
                      </div>
                      <p className="text-[#8e92a0] text-[11px] leading-relaxed">
                        Civil Lines, Ramdaspeth, Dharampeth, Byramji Town, and Wardha Road Corridor.
                      </p>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-[#08090b]/90 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-white/[0.08] text-[11px] text-[#f7f4ee]">
                      Direct Desk: <span className="text-[#d6c7b2] font-semibold font-mono">{PHONE_DISPLAY}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            9. CONTACT / INQUIRY SECTION
           ========================================================================= */}
        <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#0b0d12] border-t border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Left Column: Direct Contact Details & Brand Confidence */}
              <div className="lg:col-span-5 space-y-7">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#c2b29c] block mb-2">
                    Direct Contact
                  </span>
                  <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f4ee]">
                    Connect with Aura Living in Nagpur
                  </h2>
                  <p className="text-sm sm:text-base text-[#9ea2b0] mt-3 leading-relaxed">
                    Whether you are inquiring about our featured downtown luxury houses, seeking off-market residences, or planning to sell your luxury home in Nagpur, our private desk is ready to assist.
                  </p>
                </div>

                <div className="space-y-4">
                  
                  {/* Phone Direct */}
                  <a
                    href={PHONE_TEL}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08] hover:border-[#d6c7b2]/40 transition-all flex items-center justify-between gap-3 group shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-[#d6c7b2] group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 text-[#d6c7b2]" />
                      </div>
                      <div>
                        <span className="text-[11px] text-[#787c8a] uppercase tracking-wider block">Direct Phone Call</span>
                        <span className="text-base sm:text-lg font-bold text-[#f7f4ee] group-hover:text-[#d6c7b2] transition-colors font-mono">
                          {PHONE_DISPLAY}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#d6c7b2] group-hover:translate-x-1 transition-transform whitespace-nowrap">
                      Call Now &rarr;
                    </span>
                  </a>

                  {/* WhatsApp Direct */}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 sm:p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08] hover:border-[#25D366]/40 transition-all flex items-center justify-between gap-3 group shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <span className="text-[11px] text-[#787c8a] uppercase tracking-wider block">Instant WhatsApp Chat</span>
                        <span className="text-base sm:text-lg font-bold text-[#f7f4ee] group-hover:text-[#25D366] transition-colors font-mono">
                          {PHONE_DISPLAY}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#25D366] group-hover:translate-x-1 transition-transform whitespace-nowrap">
                      Chat Now &rarr;
                    </span>
                  </a>

                  {/* City Location */}
                  <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/[0.08] flex items-center gap-4 shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-[#d6c7b2]">
                      <MapPin className="w-5 h-5 text-[#d6c7b2]" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#787c8a] uppercase tracking-wider block">Operating City</span>
                      <span className="text-sm sm:text-base font-semibold text-[#f7f4ee]">
                        Nagpur, Maharashtra, India
                      </span>
                    </div>
                  </div>

                </div>

                <div className="text-xs text-[#787c8a] leading-relaxed">
                  * All client conversations and property inquiries are conducted under strict confidentiality.
                </div>
              </div>

              {/* Right Column: Lead Capture Form */}
              <div className="lg:col-span-7">
                <div className="p-5 sm:p-9 rounded-2xl bg-[#0f1118] border border-white/[0.09] shadow-2xl">
                  
                  <div className="mb-8">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#c2b29c] block mb-1">
                      Priority Response
                    </span>
                    <h3 className="font-serif-display text-2xl font-semibold text-[#f7f4ee]">
                      Request Property Information or Valuation
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8e92a0] mt-1.5">
                      Submit your requirements. A senior Aura Living advisor in Nagpur will contact you via phone or WhatsApp within 2 hours.
                    </p>
                  </div>

                  {contactSubmitted ? (
                    <div className="p-8 rounded-xl bg-white/[0.02] border border-white/[0.08] text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-[#1b251e] text-[#4ade80] border border-[#294230] mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="font-serif-display text-xl font-semibold text-[#f7f4ee]">
                          Inquiry Received
                        </h4>
                        <p className="text-xs sm:text-sm text-[#9ea2b0] max-w-md mx-auto">
                          Thank you, {contactForm.name || 'Valued Client'}. Our advisory team at Aura Living in Nagpur is preparing your tailored response.
                        </p>
                      </div>

                      <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href={getWhatsAppUrl(`Hello Aura Living, I just submitted an inquiry on your website:
• Name: ${contactForm.name}
• Phone: ${contactForm.phone}
• Interest: ${contactForm.serviceInterest}
• Property: ${contactForm.preferredProperty}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#25D366] hover:bg-[#34e275] rounded-lg transition-colors flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          <span>Speed up via WhatsApp</span>
                        </a>
                        <button
                          onClick={() => {
                            setContactSubmitted(false);
                            setContactForm({
                              name: '',
                              phone: '',
                              email: '',
                              serviceInterest: 'Buying Luxury Home',
                              preferredProperty: 'The Lumina Waterfall Pavilion',
                              message: ''
                            });
                          }}
                          className="px-4 py-3 text-xs font-semibold text-[#9ea2b0] hover:text-[#f7f4ee] transition-colors cursor-pointer">
                          Submit Another Request
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!contactForm.name || !contactForm.phone) return;
                        setContactSubmitted(true);
                      }}
                      className="space-y-5">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-[#c2b29c] block">
                            Full Name <span className="text-[#d6c7b2]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Anand Deshpande"
                            value={contactForm.name}
                            onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-[#f7f4ee] placeholder-[#555a6a] focus:outline-none focus:border-[#d6c7b2] transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-[#c2b29c] block">
                            Phone / WhatsApp Number <span className="text-[#d6c7b2]">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 8007678916"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-[#f7f4ee] placeholder-[#555a6a] focus:outline-none focus:border-[#d6c7b2] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-[#c2b29c] block">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. anand@domain.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-[#f7f4ee] placeholder-[#555a6a] focus:outline-none focus:border-[#d6c7b2] transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-[#c2b29c] block">
                            Service Requirement
                          </label>
                          <select
                            value={contactForm.serviceInterest}
                            onChange={(e) => setContactForm(prev => ({ ...prev, serviceInterest: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg bg-[#14161f] border border-white/[0.08] text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2] transition-colors">
                            <option value="Buying Luxury Home">Inquire to Buy: Downtown Luxury House</option>
                            <option value="Selling Luxury Home">Selling My Luxury Home in Nagpur</option>
                            <option value="Schedule Private Viewing">Schedule In-Person Site Viewing</option>
                            <option value="Confidential Off-Market Search">Confidential Off-Market Search</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-[#c2b29c] block">
                          Property of Interest or Location in Nagpur
                        </label>
                        <select
                          value={contactForm.preferredProperty}
                          onChange={(e) => setContactForm(prev => ({ ...prev, preferredProperty: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg bg-[#14161f] border border-white/[0.08] text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2] transition-colors">
                          {FEATURED_PROPERTIES.map(p => (
                            <option key={p.id} value={p.title}>{p.title} ({p.neighborhood})</option>
                          ))}
                          <option value="General Nagpur Luxury Portfolio">General Nagpur Luxury Portfolio</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-[#c2b29c] block">
                          Specific Requirements / Notes
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Please mention preferred square footage, timeline, or questions for our Nagpur advisory desk..."
                          value={contactForm.message}
                          onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-[#f7f4ee] placeholder-[#555a6a] focus:outline-none focus:border-[#d6c7b2] transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] active:scale-[0.99] transition-all rounded-lg shadow-[0_0_20px_rgba(214,199,178,0.25)] cursor-pointer flex items-center justify-center gap-2">
                        <Send className="w-4 h-4 text-[#08090b]" />
                        <span>Submit Confidential Inquiry</span>
                      </button>

                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          FOOTER (Quiet Editorial Contract) - AURA LIVING
         ========================================================================= */}
      <footer className="border-t border-white/[0.08] bg-[#07080a] pt-12 sm:pt-16 pb-28 lg:pb-16 text-xs text-[#787c8a] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
            
            {/* Col 1: Brand & Tagline */}
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-serif-display text-2xl font-semibold text-[#f7f4ee]">Aura Living</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d6c7b2]" aria-hidden="true" />
              </div>
              <p className="text-[#a4a7b4] text-sm leading-relaxed max-w-sm">
                Where modern technology meets your dream home.
              </p>
              <p className="text-xs text-[#6e7280] leading-relaxed">
                Premier real estate advisory dedicated to luxury homes and downtown residences in Nagpur, India.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-3 space-y-2.5">
              <span className="text-xs uppercase tracking-widest text-[#d6c7b2] font-semibold block mb-3">
                Navigation
              </span>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2 text-[#9da1af]">
                <li><button onClick={() => scrollTo('featured-properties')} className="text-left hover:text-[#f7f4ee] transition-colors cursor-pointer">Downtown Luxury Houses (10)</button></li>
                <li><button onClick={() => scrollTo('blueprint-studio')} className="text-left hover:text-[#f7f4ee] transition-colors cursor-pointer text-[#d6c7b2]">CAD Blueprints Studio (10)</button></li>
                <li><button onClick={() => scrollTo('comparison')} className="text-left hover:text-[#f7f4ee] transition-colors cursor-pointer">Compare Residences</button></li>
                <li><button onClick={() => scrollTo('services')} className="text-left hover:text-[#f7f4ee] transition-colors cursor-pointer">Selling Advisory</button></li>
                <li><button onClick={() => scrollTo('estimator')} className="text-left hover:text-[#f7f4ee] transition-colors cursor-pointer">Acquisition Estimator</button></li>
                <li><button onClick={() => scrollTo('about')} className="text-left hover:text-[#f7f4ee] transition-colors cursor-pointer">About Aura Living</button></li>
                <li><button onClick={() => scrollTo('why-choose-us')} className="text-left hover:text-[#f7f4ee] transition-colors cursor-pointer">Why Choose Us</button></li>
                <li><button onClick={() => scrollTo('market-area')} className="text-left hover:text-[#f7f4ee] transition-colors cursor-pointer">Nagpur Market Guide</button></li>
                <li><button onClick={() => scrollTo('contact')} className="text-left hover:text-[#f7f4ee] transition-colors cursor-pointer">Contact Desk</button></li>
              </ul>
            </div>

            {/* Col 3: Direct Contact Information */}
            <div className="md:col-span-5 space-y-2.5">
              <span className="text-xs uppercase tracking-widest text-[#d6c7b2] font-semibold block mb-3">
                Contact & Regional Desk
              </span>
              <div className="space-y-2 text-[#9da1af]">
                <div>
                  <strong className="text-[#f7f4ee] block">Phone Line:</strong>
                  <a href={PHONE_TEL} className="hover:text-[#d6c7b2] transition-colors font-mono">{PHONE_DISPLAY}</a>
                </div>
                <div>
                  <strong className="text-[#f7f4ee] block">WhatsApp Advisory:</strong>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors font-mono">{PHONE_DISPLAY}</a>
                </div>
                <div>
                  <strong className="text-[#f7f4ee] block">Operating Territory:</strong>
                  <span>Nagpur, Maharashtra, India</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-[#636775]">
            <p>© {new Date().getFullYear()} Aura Living. All rights reserved. Real Estate in Nagpur, India.</p>
            <div className="flex items-center gap-4">
              <span>RERA Compliant Advisory</span>
              <span aria-hidden="true">·</span>
              <span>Confidential Representation</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          FIXED MOBILE CONVERSION BAR (15% Viewport Cap Compliant)
         ========================================================================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08090b]/95 backdrop-blur-xl border-t border-white/[0.09] px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={PHONE_TEL}
          className="flex-1 py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#d6c7b2] bg-white/[0.05] border border-white/[0.1] rounded-lg text-center flex items-center justify-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-[#d6c7b2]" />
          <span>Call<span className="hidden min-[400px]:inline"> {PHONE_DISPLAY}</span></span>
        </a>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#25D366] rounded-lg text-center flex items-center justify-center gap-1.5 shadow-md">
          <MessageSquare className="w-3.5 h-3.5 text-[#08090b]" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* =========================================================================
          MODAL 1: SCHEDULE VIEWING / TOUR MODAL
         ========================================================================= */}
      {tourModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0f1118] border border-white/[0.12] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setTourModalOpen(false)}
              className="absolute top-5 right-5 text-[#8e92a0] hover:text-[#f7f4ee] p-1.5 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer">
              <X className="w-5 h-5" />
            </button>

            {tourSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#1b251e] text-[#4ade80] border border-[#294230] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif-display text-2xl font-semibold text-[#f7f4ee]">
                  Viewing Appointment Requested
                </h3>
                <p className="text-xs sm:text-sm text-[#9ea2b0] leading-relaxed max-w-sm mx-auto">
                  Thank you, {tourData.fullName || 'Valued Client'}. Our Aura Living representative will call you at {tourData.phone || PHONE_DISPLAY} to confirm access details for {tourData.propertyName}.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={getWhatsAppUrl(`Hello Aura Living, I requested a private viewing for ${tourData.propertyName} in Nagpur:
• Name: ${tourData.fullName}
• Phone: ${tourData.phone}
• Preferred Date: ${tourData.preferredDate || 'Earliest slot'}
• Slot: ${tourData.timeSlot}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#25D366] hover:bg-[#32e073] rounded-lg transition-colors flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setTourModalOpen(false)}
                    className="px-5 py-3 text-xs font-semibold text-[#9ea2b0] hover:text-[#f7f4ee] transition-colors cursor-pointer">
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c2b29c] block mb-1">
                  Private Inspection
                </span>
                <h3 className="font-serif-display text-2xl font-semibold text-[#f7f4ee]">
                  Schedule a Private Tour
                </h3>
                <p className="text-xs sm:text-sm text-[#8e92a0] mt-1 mb-6">
                  Experience downtown luxury houses in Nagpur firsthand with an experienced Aura Living advisor.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!tourData.fullName || !tourData.phone) return;
                    setTourSubmitted(true);
                  }}
                  className="space-y-4">
                  
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#c2b29c]">Property of Interest</label>
                    <select
                      value={tourData.propertyName}
                      onChange={(e) => setTourData(prev => ({ ...prev, propertyName: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141620] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]">
                      {FEATURED_PROPERTIES.map(p => (
                        <option key={p.id} value={p.title}>{p.title} ({p.neighborhood})</option>
                      ))}
                      <option value="General Downtown Nagpur Portfolio">General Downtown Luxury Portfolio</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#c2b29c]">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={tourData.fullName}
                        onChange={(e) => setTourData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#c2b29c]">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 8007678916"
                        value={tourData.phone}
                        onChange={(e) => setTourData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#c2b29c]">Preferred Date</label>
                      <input
                        type="date"
                        value={tourData.preferredDate}
                        onChange={(e) => setTourData(prev => ({ ...prev, preferredDate: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#c2b29c]">Preferred Time Window</label>
                      <select
                        value={tourData.timeSlot}
                        onChange={(e) => setTourData(prev => ({ ...prev, timeSlot: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141620] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]">
                        <option value="Morning (10:30 AM - 1:00 PM)">Morning (10:30 AM - 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM - 4:30 PM)">Afternoon (2:00 PM - 4:30 PM)</option>
                        <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#c2b29c]">Any Specific Inquiries</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Parking space for 4 vehicles, vastu requirements..."
                      value={tourData.notes}
                      onChange={(e) => setTourData(prev => ({ ...prev, notes: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] rounded-lg transition-colors cursor-pointer mt-2 shadow-lg">
                    Request Appointment
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: SELL HOME VALUATION MODAL
         ========================================================================= */}
      {sellModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0f1118] border border-white/[0.12] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSellModalOpen(false)}
              className="absolute top-5 right-5 text-[#8e92a0] hover:text-[#f7f4ee] p-1.5 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer">
              <X className="w-5 h-5" />
            </button>

            {sellSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#1b251e] text-[#4ade80] border border-[#294230] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif-display text-2xl font-semibold text-[#f7f4ee]">
                  Selling Valuation Scheduled
                </h3>
                <p className="text-xs sm:text-sm text-[#9ea2b0] leading-relaxed max-w-sm mx-auto">
                  Thank you, {sellData.ownerName}. A senior property director from Aura Living in Nagpur will review your property parameters and connect with you at {sellData.phone || PHONE_DISPLAY}.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={getWhatsAppUrl(`Hello Aura Living, I requested a selling valuation for my property in Nagpur:
• Owner: ${sellData.ownerName}
• Phone: ${sellData.phone}
• Location: ${sellData.propertyLocation}
• Type: ${sellData.propertyType}
• Size: ${sellData.approximateSize}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#25D366] hover:bg-[#32e073] rounded-lg transition-colors flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Directly on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSellModalOpen(false)}
                    className="px-5 py-3 text-xs font-semibold text-[#9ea2b0] hover:text-[#f7f4ee] transition-colors cursor-pointer">
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c2b29c] block mb-1">
                  Seller Services
                </span>
                <h3 className="font-serif-display text-2xl font-semibold text-[#f7f4ee]">
                  Sell Your Luxury Home with Aura Living
                </h3>
                <p className="text-xs sm:text-sm text-[#8e92a0] mt-1 mb-6">
                  Get a comprehensive architectural valuation and discreet marketing plan for your residence in Nagpur.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!sellData.ownerName || !sellData.phone) return;
                    setSellSubmitted(true);
                  }}
                  className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#c2b29c]">Owner Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={sellData.ownerName}
                        onChange={(e) => setSellData(prev => ({ ...prev, ownerName: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#c2b29c]">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 8007678916"
                        value={sellData.phone}
                        onChange={(e) => setSellData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#c2b29c]">Property Location</label>
                      <input
                        type="text"
                        placeholder="e.g. Civil Lines, Ramdaspeth"
                        value={sellData.propertyLocation}
                        onChange={(e) => setSellData(prev => ({ ...prev, propertyLocation: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#c2b29c]">Property Type</label>
                      <select
                        value={sellData.propertyType}
                        onChange={(e) => setSellData(prev => ({ ...prev, propertyType: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141620] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]">
                        <option value="Standalone Luxury Villa">Standalone Luxury Villa</option>
                        <option value="Waterfront Pavilion Villa">Waterfront Pavilion Villa</option>
                        <option value="Modern Cantilever Estate">Modern Cantilever Estate</option>
                        <option value="Multi-Level Downtown House">Multi-Level Downtown House</option>
                        <option value="Penthouse Residence">Penthouse Residence</option>
                        <option value="Palatial Acre Sanctuary">Palatial Acre Sanctuary</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#c2b29c]">Approximate Built Area</label>
                      <input
                        type="text"
                        placeholder="e.g. 5,500 sq.ft"
                        value={sellData.approximateSize}
                        onChange={(e) => setSellData(prev => ({ ...prev, approximateSize: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#c2b29c]">Selling Timeline</label>
                      <select
                        value={sellData.timeline}
                        onChange={(e) => setSellData(prev => ({ ...prev, timeline: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141620] border border-white/[0.08] text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d6c7b2]">
                        <option value="Immediate (within 30-60 days)">Immediate (within 30-60 days)</option>
                        <option value="3 to 6 months">3 to 6 months</option>
                        <option value="Exploring valuation only">Exploring valuation only</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] rounded-lg transition-colors cursor-pointer mt-2 shadow-lg">
                    Submit Valuation Request
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: PROPERTY DETAILS, DEDICATED BLUEPRINT & GALLERY DOSSIER MODAL
         ========================================================================= */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl rounded-2xl bg-[#0f1118] border border-white/[0.12] shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-5 right-5 text-[#8e92a0] hover:text-[#f7f4ee] p-1.5 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer z-10">
              <X className="w-5 h-5" />
            </button>

            {/* Modal Navigation Tabs: Photos vs Technical Blueprint */}
            <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-4 mb-6 pr-10">
              <button
                onClick={() => setModalTab('photos')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                  modalTab === 'photos'
                    ? 'bg-[#d6c7b2] text-[#08090b]'
                    : 'text-[#8e92a0] hover:text-[#f7f4ee] hover:bg-white/[0.04]'
                }`}>
                <Eye className="w-3.5 h-3.5" />
                <span>Editorial Photography</span>
              </button>
              <button
                onClick={() => setModalTab('blueprint')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                  modalTab === 'blueprint'
                    ? 'bg-[#d6c7b2] text-[#08090b]'
                    : 'text-[#8e92a0] hover:text-[#f7f4ee] hover:bg-white/[0.04]'
                }`}>
                <Layers className="w-3.5 h-3.5" />
                <span>{selectedProperty.blueprint.code} Blueprint & Levels</span>
              </button>
            </div>

            <div className="space-y-6">
              
              {/* TAB 1: PHOTO GALLERY */}
              {modalTab === 'photos' && (
                <div className="space-y-4">
                  <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-[#14161f]">
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#08090b]/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/[0.08] text-xs text-[#d6c7b2] font-semibold">
                      {selectedProperty.category} · {selectedProperty.neighborhood}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#08090b]/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/[0.08] text-xs font-mono text-[#d6c7b2] hidden sm:block">
                      Orientation: {selectedProperty.specs.facing}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {selectedProperty.gallery.map((img, idx) => (
                      <div key={idx} className="h-16 sm:h-20 rounded-lg overflow-hidden border border-white/[0.08]">
                        <img
                          src={img}
                          alt={`${selectedProperty.title} view ${idx + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                    <div
                      onClick={() => setModalTab('blueprint')}
                      className="h-16 sm:h-20 rounded-lg overflow-hidden border border-[#d6c7b2]/40 relative group cursor-pointer"
                      title="Inspect 3D Blueprint">
                      <img
                        src={selectedProperty.blueprint.image}
                        alt={`${selectedProperty.title} Blueprint`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-[#08090b]/70 flex items-center justify-center text-[10px] text-[#d6c7b2] font-semibold uppercase tracking-wider text-center p-1">
                        Inspect Blueprint
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: TECHNICAL BLUEPRINT SCHEMATIC & FLOORPLAN BREAKDOWN */}
              {modalTab === 'blueprint' && (
                <div className="space-y-6">
                  <div className="relative h-80 sm:h-[420px] rounded-xl overflow-hidden bg-[#070d18] border border-[#d6c7b2]/30 flex items-center justify-center p-3">
                    {/* Blueprint fine grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b2b48_1px,transparent_1px),linear-gradient(to_bottom,#1b2b48_1px,transparent_1px)] bg-[size:24px_24px] opacity-25 pointer-events-none" />
                    
                    <img
                      src={selectedProperty.blueprint.image}
                      alt={`${selectedProperty.title} Blueprint`}
                      style={{ transform: `scale(${modalBlueprintZoom})` }}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 rounded-lg select-none"
                      referrerPolicy="no-referrer"
                    />

                    {/* Top-Left Code & Type */}
                    <div className="absolute top-4 left-4 bg-[#08090b]/90 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-white/[0.1] text-xs">
                      <span className="font-mono text-[#d6c7b2] font-bold">{selectedProperty.blueprint.code}</span>
                      <span className="text-[#555a68] mx-1.5">·</span>
                      <span className="text-[#f7f4ee] font-medium">{selectedProperty.blueprint.type}</span>
                    </div>

                    {/* Top-Right Zoom Controls */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#08090b]/90 backdrop-blur-md p-1 rounded-lg border border-white/[0.1] text-xs">
                      <button
                        onClick={() => setModalBlueprintZoom(z => Math.min(z + 0.25, 2.5))}
                        className="p-1 text-[#8e92a0] hover:text-[#f7f4ee] rounded transition-colors cursor-pointer"
                        title="Zoom In">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[11px] font-mono text-[#d6c7b2] px-1">{Math.round(modalBlueprintZoom * 100)}%</span>
                      <button
                        onClick={() => setModalBlueprintZoom(z => Math.max(z - 0.25, 0.75))}
                        className="p-1 text-[#8e92a0] hover:text-[#f7f4ee] rounded transition-colors cursor-pointer"
                        title="Zoom Out">
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setModalBlueprintZoom(1)}
                        className="p-1 text-[#8e92a0] hover:text-[#f7f4ee] rounded transition-colors cursor-pointer"
                        title="Reset Zoom">
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom Metadata Bar */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#08090b]/90 backdrop-blur-md p-2.5 rounded-lg border border-white/[0.1] text-xs flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[#8e92a0]">Aura Living Technical Archive · Nagpur, India</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[#d6c7b2] font-mono text-[11px]">Sheet: {selectedProperty.blueprint.dwgSheet || 'DWG-01'}</span>
                        <span className="text-[#555a68]">·</span>
                        <span className="text-[#d6c7b2] font-mono text-[11px]">{selectedProperty.blueprint.scale || 'Scale 1:100 Metric'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Level-by-Level Floorplan Dimension Breakdown */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#d6c7b2]">
                        Level-by-Level Spatial Breakdown
                      </h4>
                      <span className="text-xs text-[#8e92a0]">Click level to inspect</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {selectedProperty.blueprint.levels.map((lvl, lidx) => (
                        <div
                          key={lidx}
                          onClick={() => setActiveModalBlueprintLevel(lidx)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                            activeModalBlueprintLevel === lidx
                              ? 'bg-white/[0.06] border-[#d6c7b2] shadow-[0_0_15px_rgba(214,199,178,0.2)]'
                              : 'bg-white/[0.02] border-white/[0.08] hover:border-white/[0.2]'
                          }`}>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#f7f4ee] font-mono">{lvl.levelName}</span>
                            {activeModalBlueprintLevel === lidx && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#d6c7b2]" />
                            )}
                          </div>
                          <p className="text-[11px] text-[#8e92a0] leading-relaxed">{lvl.description}</p>
                          <div className="pt-2 border-t border-white/[0.06] space-y-1">
                            {lvl.keyRooms.map((room, ridx) => (
                              <div key={ridx} className="flex items-center gap-1.5 text-[11px] text-[#d6c7b2]">
                                <Check className="w-3 h-3 text-[#d6c7b2] shrink-0" />
                                <span>{room}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Spec Notes */}
                  {selectedProperty.blueprint.specNotes && selectedProperty.blueprint.specNotes.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-[#8e92a0] font-semibold">Architectural Notes:</span>
                      {selectedProperty.blueprint.specNotes.map((note, nidx) => (
                        <span key={nidx} className="px-2 py-0.5 rounded bg-white/[0.04] text-[#d6c7b2] text-[11px] border border-white/[0.05]">
                          {note}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* WhatsApp Blueprint Request */}
                  <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-[#8e92a0]">Need vector CAD DWG files or high-resolution architectural prints?</span>
                    <a
                      href={getPropertyWhatsAppUrl(selectedProperty)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#34e275] text-[#08090b] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md shrink-0">
                      <MessageSquare className="w-3.5 h-3.5 text-[#08090b]" />
                      <span>Request {selectedProperty.blueprint.code} Blueprint on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Title & Headline */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c2b29c] block mb-1">
                  Nagpur Downtown Residence · Aura Living
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#f7f4ee]">
                  {selectedProperty.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#d6c7b2] mt-1 font-medium">
                  {selectedProperty.headline}
                </p>
              </div>

              {/* Specifications Unboxed */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] text-xs">
                <div>
                  <span className="text-[#787c8a] block mb-0.5">Bedrooms</span>
                  <span className="text-[#f7f4ee] font-semibold">{selectedProperty.specs.beds} Master Suites</span>
                </div>
                <div>
                  <span className="text-[#787c8a] block mb-0.5">Bathrooms</span>
                  <span className="text-[#f7f4ee] font-semibold">{selectedProperty.specs.baths} Bathrooms</span>
                </div>
                <div>
                  <span className="text-[#787c8a] block mb-0.5">Carpet Area</span>
                  <span className="text-[#f7f4ee] font-semibold font-mono">{selectedProperty.specs.sqft}</span>
                </div>
                <div>
                  <span className="text-[#787c8a] block mb-0.5">Ceiling Volume</span>
                  <span className="text-[#d6c7b2] font-semibold">{selectedProperty.specs.ceilingHeight}</span>
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-2 text-xs sm:text-sm text-[#9ea2b0] leading-relaxed">
                <p>{selectedProperty.description}</p>
              </div>

              {/* Architectural Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#d6c7b2]">
                  Key Residence Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#c2b29c]">
                  {selectedProperty.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#d6c7b2] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={getPropertyWhatsAppUrl(selectedProperty)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#25D366] bg-[#121620] hover:bg-[#181e2b] border border-[#25D366]/30 rounded-lg transition-colors">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Request Full CAD Package on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const title = selectedProperty.title;
                    setSelectedProperty(null);
                    setTourData(prev => ({ ...prev, propertyName: title }));
                    setTourModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#08090b] bg-[#d6c7b2] hover:bg-[#e8ded0] rounded-lg transition-colors cursor-pointer shadow-lg">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Private Walkthrough</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Themed Scroll-to-Top Floating Control */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 lg:bottom-8 right-6 z-40 p-3 rounded-full bg-[#10131a]/95 hover:bg-[#181c26] border border-[#d6c7b2]/50 text-[#d6c7b2] hover:text-[#f7f4ee] shadow-[0_0_20px_rgba(214,199,178,0.25)] hover:shadow-[0_0_30px_rgba(214,199,178,0.5)] transition-all hover:-translate-y-1 cursor-pointer flex items-center justify-center group"
          title="Scroll to Top">
          <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

    </div>
  );
}
