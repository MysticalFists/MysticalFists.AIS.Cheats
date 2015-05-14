
function BuildHotkeyModel() {
    var self = this;

    self.SpecIdToGridMap = ko.observable(
        {
            "/pa/hackedunits/land/control_module/control_module.json": ["utility", 1],
            "/pa/hackedunits/land/radar_adv/radar_adv.json": ["utility", 2],
            "/pa/hackedunits/land/energy_plant_adv/energy_plant_adv.json": ["utility", 3],
            "/pa/hackedunits/land/metal_extractor_adv/metal_extractor_adv.json": ["utility", 4],
            "/pa/hackedunits/orbital/delta_v_engine/delta_v_engine.json": ["utility", 6],
            "/pa/hackedunits/land/radar/radar.json": ["utility", 7],          
            "/pa/hackedunits/land/energy_plant/energy_plant.json": ["utility", 8],
            "/pa/hackedunits/land/metal_extractor/metal_extractor.json": ["utility", 9],
            "/pa/hackedunits/land/land_barrier/land_barrier.json": ["utility", 10],
            "/pa/hackedunits/land/teleporter/teleporter.json": ["utility", 11],
            "/pa/hackedunits/orbital/deep_space_radar/deep_space_radar.json": ["utility", 12],
            "/pa/hackedunits/land/energy_storage/energy_storage.json": ["utility", 13],
            "/pa/hackedunits/land/metal_storage/metal_storage.json": ["utility", 14],
		
            "/pa/hackedunits/sea/naval_factory_adv/naval_factory_adv.json": ["factory", 6],           
            "/pa/hackedunits/air/air_factory_adv/air_factory_adv.json": ["factory", 7],
            "/pa/hackedunits/land/bot_factory_adv/bot_factory_adv.json": ["factory", 8],
            "/pa/hackedunits/land/vehicle_factory_adv/vehicle_factory_adv.json": ["factory", 9],
            "/pa/hackedunits/orbital/orbital_launcher/orbital_launcher.json": ["factory", 10],
            "/pa/hackedunits/sea/naval_factory/naval_factory.json": ["factory", 11],       
            "/pa/hackedunits/air/air_factory/air_factory.json": ["factory", 12],
            "/pa/hackedunits/land/bot_factory/bot_factory.json": ["factory", 13],
            "/pa/hackedunits/land/vehicle_factory/vehicle_factory.json": ["factory", 14],
            "/pa/hackedunits/land/unit_cannon/unit_cannon.json": ["factory", 0],
			
            "/pa/hackedunits/land/laser_defense_adv/laser_defense_adv.json": ["combat", 0],                   
            "/pa/hackedunits/land/tactical_missile_launcher/tactical_missile_launcher.json": ["combat", 2],
            "/pa/hackedunits/land/laser_defense/laser_defense.json": ["combat", 5],
            "/pa/hackedunits/land/air_defense_adv/air_defense_adv.json": ["combat", 6],       
            "/pa/hackedunits/land/artillery_long/artillery_long.json": ["combat", 7],
            "/pa/hackedunits/sea/torpedo_launcher_adv/torpedo_launcher_adv.json": ["combat", 8],
            "/pa/hackedunits/land/nuke_launcher/nuke_launcher.json": ["combat", 4],
            "/pa/hackedunits/land/anti_nuke_launcher/anti_nuke_launcher.json": ["combat", 9],
            "/pa/hackedunits/land/laser_defense_single/laser_defense_single.json": ["combat", 10],
            "/pa/hackedunits/land/air_defense/air_defense.json": ["combat", 11],       
            "/pa/hackedunits/land/artillery_short/artillery_short.json": ["combat", 12],
            "/pa/hackedunits/sea/torpedo_launcher/torpedo_launcher.json": ["combat", 13],
            "/pa/hackedunits/orbital/ion_defense/ion_defense.json": ["combat", 14],
            
            "/pa/hackedunits/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json": ["vehicle", 5],
            "/pa/hackedunits/land/tank_laser_adv/tank_laser_adv.json": ["vehicle", 6],
            "/pa/hackedunits/land/tank_heavy_armor/tank_heavy_armor.json": ["vehicle", 7],
            "/pa/hackedunits/land/tank_heavy_mortar/tank_heavy_mortar.json": ["vehicle", 8],
            "/pa/hackedunits/land/fabrication_vehicle/fabrication_vehicle.json": ["vehicle", 10],                        
            "/pa/hackedunits/land/tank_light_laser/tank_light_laser.json": ["vehicle", 11],
            "/pa/hackedunits/land/tank_armor/tank_armor.json": ["vehicle", 12],
            "/pa/hackedunits/land/land_scout/land_scout.json": ["vehicle", 13],
            "/pa/hackedunits/land/aa_missile_vehicle/aa_missile_vehicle.json": ["vehicle", 14],    
			
            "/pa/hackedunits/land/fabrication_bot_adv/fabrication_bot_adv.json": ["bot", 5],   
            "/pa/hackedunits/land/assault_bot_adv/assault_bot_adv.json": ["bot", 6],
            "/pa/hackedunits/land/bot_sniper/bot_sniper.json": ["bot", 7],
            "/pa/hackedunits/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json": ["bot", 8],
            "/pa/hackedunits/land/bot_bomb/bot_bomb.json": ["bot", 14],
            "/pa/hackedunits/land/fabrication_bot/fabrication_bot.json": ["bot", 10],     
            "/pa/hackedunits/land/assault_bot/assault_bot.json": ["bot", 11],
            "/pa/hackedunits/land/bot_grenadier/bot_grenadier.json": ["bot", 12],
            "/pa/hackedunits/land/fabrication_bot_combat/fabrication_bot_combat.json": ["bot", 13],
            "/pa/hackedunits/land/bot_tactical_missile/bot_tactical_missile.json": ["bot", 9],
			
            "/pa/hackedunits/orbital/orbital_laser/orbital_laser.json": ["orbital", 6],
            "/pa/hackedunits/orbital/radar_satellite_adv/radar_satellite_adv.json": ["orbital", 7],
            "/pa/hackedunits/orbital/solar_array/solar_array.json": ["orbital", 5],
            "/pa/hackedunits/orbital/defense_satellite/defense_satellite.json": ["orbital", 14],           
            "/pa/hackedunits/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json": ["orbital", 10],
            "/pa/hackedunits/orbital/orbital_fighter/orbital_fighter.json": ["orbital", 11],
            "/pa/hackedunits/orbital/radar_satellite/radar_satellite.json": ["orbital", 12],
            "/pa/hackedunits/orbital/orbital_lander/orbital_lander.json": ["orbital", 13],
            "/pa/hackedunits/orbital/orbital_factory/orbital_factory.json": ["orbital", 9],
            "/pa/hackedunits/orbital/mining_platform/mining_platform.json": ["orbital", 8],
                 
            "/pa/hackedunits/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json": ["air", 5],
			"/pa/hackedunits/air/fighter_adv/fighter_adv.json": ["air", 6],
            "/pa/hackedunits/air/gunship/gunship.json": ["air", 7],
            "/pa/hackedunits/air/bomber_adv/bomber_adv.json": ["air", 8],
            "/pa/hackedunits/air/fabrication_aircraft/fabrication_aircraft.json": ["air", 10],
            "/pa/hackedunits/air/fighter/fighter.json": ["air", 11],
            "/pa/hackedunits/air/bomber/bomber.json": ["air", 12],
            "/pa/hackedunits/air/air_scout/air_scout.json": ["air", 13],
            "/pa/hackedunits/air/transport/transport.json": ["air", 14],
			
            "/pa/hackedunits/sea/fabrication_ship_adv/fabrication_ship_adv.json": ["sea",5],
            "/pa/hackedunits/sea/battleship/battleship.json": ["sea", 6],
            "/pa/hackedunits/sea/missile_ship/missile_ship.json": ["sea", 7],
            "/pa/hackedunits/sea/nuclear_sub/nuclear_sub.json": ["sea", 8],
            "/pa/hackedunits/sea/fabrication_ship/fabrication_ship.json": ["sea", 10],
            "/pa/hackedunits/sea/frigate/frigate.json": ["sea", 11],
            "/pa/hackedunits/sea/destroyer/destroyer.json": ["sea", 12],
            "/pa/hackedunits/sea/attack_sub/attack_sub.json": ["sea", 13],
            "/pa/hackedunits/sea/sea_scout/sea_scout.json": ["sea", 14],

            "/pa/hackedunits/land/land_mine/land_mine.json": ["ammo", 10],
            "/pa/hackedunits/land/anti_nuke_launcher/anti_nuke_launcher_ammo.json": ["ammo", 13],
            "/pa/hackedunits/land/nuke_launcher/nuke_launcher_ammo.json": ["ammo", 14],
        }
    );
};
