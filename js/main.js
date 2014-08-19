$(function(){
	
	// Initialise Slider
	$('#objectiveSlider ul').cycle({
		fx:     'scrollHorz',
		speed: 'fast',
		timeout: 0,
		prev: ".navigator #previous",
		next: ".navigator #next",
		nowrap:  1,
		after: onAfter
	});
	
	// After Slider Has Completed, Do...
	function onAfter(curr, next, opts) {
	    // Find Slide Number, (-1)
	    var index = opts.currSlide;
	    $('.navigator #previous')[index == 0 ? 'hide' : 'show']();
	    $('.navigator #next')[index == opts.slideCount - 1 ? 'hide' : 'show']();
	    // LO1
	    if ( index == opts.slideCount - 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo1 h4').text('Cyfrinachedd');
			} else {
				$('.content.lo1 h4').text('Confidentiality');
			}
		} else {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo1 h4').text('Gwerthoedd');
			} else {
				$('.content.lo1 h4').text('Values');
			}
		}
		// LO2
		if ( index == 0 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo2 h4').text('Eich rôl yn y sefydliad');
			} else {
				$('.content.lo2 h4').text('Your role in the organisation');
			}
		} 
		else if ( index == opts.slideCount - 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo2 h4').text('Polisïau a gweithdrefnau');
			} else {
				$('.content.lo2 h4').text('Policies and procedures');
			}
		}
		else {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo2 h4').text('Eich rôl fel gweithiwr');
			} else {
				$('.content.lo2 h4').text('Your role as a worker');
			}
		}
		if ( index == 0 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo3 h4').text('Iechyd a diogelwch');
			} else {
				$('.content.lo3 h4').text('Health and safety');
			}
		} 
		else if ( index == 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo3 h4').text('Symud a lleoli');
			} else {
				$('.content.lo3 h4').text('Moving and positioning');
			}
		} 
		else if ( index == 2 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo3 h4').text('Diogelwch tân');
			} else {
				$('.content.lo3 h4').text('Fire safety');
			}
		}
		else if ( index == 3 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo3 h4').text('Cymorth Cyntaf Brys');
			} else {
				$('.content.lo3 h4').text('Emergency First Aid');
			}
		}
		else if ( index == 4 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo3 h4').text('Atal a rheoli heintiau');
			} else {
				$('.content.lo3 h4').text('Infection prevention and control');
			}
		}
		else if ( index == 5 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo3 h4').text('Gweithdrefnau gofal iechyd a meddyginiaethau');
			} else {
				$('.content.lo3 h4').text('Medication and health care procedures');
			}
		}
		else if ( index == opts.slideCount - 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo3 h4').text('Diogelwch');
			} else {
				$('.content.lo3 h4').text('Security');
			}
		}
		else {
			$('.content.lo3 h4').text(' ');
		}
		if ( index == opts.slideCount - 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo4 h4').text('Trin gwybodaeth mewn lleoliadau iechyd a gofal cymdeithasol');
			} else {
				$('.content.lo4 h4').text('Handle information in health and social care settings');
			}
		} else {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo4 h4').text('Cydnabod a deall pwysigrwydd pob dull o gyfathrebu');
			} else {
				$('.content.lo4 h4').text('Recognise and understand the importance of all forms of communication');
			}
		}
		if ( index == 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo5 h4').text('Deall a chydnabod gwahanol fathau o gam-drin');
			} else {
				$('.content.lo5 h4').text('Understand and recognise different types of abuse');
			}
		}
		else if ( index == opts.slideCount - 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo5 h4').text('Deall sut mae ymateb i amheuon o gam-drin neu esgeuluso');
			} else {
				$('.content.lo5 h4').text('Understand how to respond to suspected abuse or neglect');
			}
		}
		else if ( index == 0 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo5 h4').text('Deddfwriaeth, polisïau a gweithdrefnau');
			} else {
				$('.content.lo5 h4').text('Legislation, policies and procedures');
			}
		}
		else {
				$('.content.lo5 h4').text('');
		}
		if ( index == opts.slideCount - 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo6 h4').text('Dysgu a datblygu');
			} else {
				$('.content.lo6 h4').text('Learning and development');	
			}
		} else {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo6 h4').text('Cymorth a goruchwyliaeth');
			} else {
				$('.content.lo6 h4').text('Support and supervision');
			}
		}
		if ( index == 0 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo7 h4').text('Gwerthoedd');
			} else {
				$('.content.lo7 h4').text('Values');
			}
		} 
		else if ( index == 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo7 h4').text('Dulliau sy’n canolbwyntio ar y plentyn');
			} else {
				$('.content.lo7 h4').text('Child-centred approaches');
			}
		} 
		else if ( index == 2 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo7 h4').text('Cyfathrebu â phlant');
			} else {
				$('.content.lo7 h4').text('Communicating with children');
			}
		}
		else if ( index == 3 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo7 h4').text('Datblygiad plant');
			} else {
				$('.content.lo7 h4').text('Child development');
			}
		}
		else if ( index == 4 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo7 h4').text('Ymddygiad');
			} else {
				$('.content.lo7 h4').text('Behaviour');
			}
		}
		else if ( index == opts.slideCount - 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo7 h4').text('Trawsnewidiadau');
			} else {
				$('.content.lo7 h4').text('Transitions');
			}
		}
		else {
			$('.content.lo7 h4').text('');
		}
		if ( index == opts.slideCount - 1 ) {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo8 h4').text('Gweithio gydag unigolion sydd ag anghenion iechyd a gofal cymdeithasol');
			} else {
				$('.content.lo8 h4').text('Working with adults with health and social care needs');
			}
		} else {
			if ( $('body').hasClass('welsh') ) {
				$('.content.lo8 h4').text('Dulliau sy’n canolbwyntio ar yr unigolyn');
			} else {
				$('.content.lo8 h4').text('Person-centred approaches');
			}
		}

	}

	// Question Slider
	$('#questionSlider > ul').cycle({
		fx:     'scrollVert',
		speed: 'slow',
		timeout: 0,
		prev: ".navigator #previous",
		next: ".navigator #next",
		nowrap:  1,
		rev: 1,
		after: function(el, next_el) {
			$(next_el).addClass('active');
		},
		before: function(el) {
			$(el).removeClass('active');
		}
	});
	
	// Checkbox Styling
	$('input.cubeBox').prettyCheckable();
	
	// Useful Stuff
    $('li:first-child').addClass('first-child');
    $('li:last-child').addClass('last-child');
    
	// First, Pull Out Checkboxes
	$('#objectiveSlider ul li input[type=checkbox]').each(function(){
		var checkboxID = $(this).attr('id');
		var checkboxSave = window.localStorage.getItem(checkboxID);
		if ( checkboxSave == '1' ) {
			$(this).attr('checked','checked');
			$(this).siblings('a').addClass('checked');
		} else {
			$(this).removeAttr('checked');
			$(this).siblings('a').removeClass('checked');
		}
	});
	// Dynamically Save All Checkboxes On Save
	$('.store').click(function(e){
		e.preventDefault();
		$('#objectiveSlider ul li input[type=checkbox]').each(function(){
			var checkboxID = $(this).attr('id');
			var checkboxChecked = $(this).prop('checked');
			if ( checkboxChecked == true ) {
	    		window.localStorage.setItem(checkboxID,'1');
			} else {
	    		window.localStorage.setItem(checkboxID,'0');
			}
		});
	});
	
});

