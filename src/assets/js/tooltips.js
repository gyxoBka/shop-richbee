const vToolTips = function () {
    const TRANSITION_DURATION = 200

    function _createToolTip(tip) {
        const toolTip = document.createElement('div')

        toolTip.classList.add('tooltip')
        toolTip.innerHTML = tip

        document.body.appendChild(toolTip);

        return toolTip
    }

    document.addEventListener("mouseenter", function(e) {
        const $el = e.target
        const tip = $el.dataset.tooltip
    
        if(!tip || tip.lenght === 0)
            return

        let toolTipDist = 0, isAnimated = false

        $el.removeAttribute('data-tooltip');
        $el.style.cursor = 'help'

        const $toolTip = _createToolTip(tip)

        const toolTipPos = () => {
            let targetRect = $el.getBoundingClientRect()
            let postLeft = 0, posTop = 0
    
            postLeft = parseInt(targetRect.left) + ( $el.offsetWidth / 2 ) - ( $toolTip.offsetWidth / 2 )
            posTop  = parseInt(targetRect.top) + window.pageYOffset - $toolTip.offsetHeight - 10
            
            toolTipDist = -20

            if( parseInt(targetRect.left) < ($toolTip.offsetWidth/2))
            {
                postLeft = parseInt(targetRect.left) - window.pageXOffset + $el.offsetWidth / 2 - 20
                $toolTip.classList.add('left')
            }
            else
                $toolTip.classList.remove('left')
    
            if( parseInt(targetRect.left) + ($toolTip.offsetWidth/2) > window.innerWidth )
            {
                postLeft = parseInt(targetRect.left) - window.pageXOffset - $toolTip.offsetWidth + ($el.offsetWidth / 2) + 20
                $toolTip.classList.add('right')
            }
            else
                $toolTip.classList.remove('right')
    
            if( parseInt(targetRect.top) < $toolTip.offsetHeight )
            {
                posTop  = parseInt(targetRect.top) + window.pageYOffset + $el.offsetHeight + 15
                $toolTip.classList.add('top')
                toolTipDist = 20
            }
            else
                $toolTip.classList.remove('top')

            $toolTip.style.left = postLeft + 'px'
            $toolTip.style.top = posTop + 'px'

            if(!isAnimated) {
                isAnimated = true
                $toolTip.style.transform = `translateY(${toolTipDist}px)`

                setTimeout(() => {
                    $toolTip.style.opacity = 1
                    $toolTip.style.transform = "translate(0px, 0px)"
                    
                }, TRANSITION_DURATION)
            }
        }

        toolTipPos()

        const removeToolTip = () => {
            $toolTip.style.transform = `translateY(${toolTipDist}px)`
            $toolTip.style.opacity = 0

            $el.removeEventListener('mouseleave', removeToolTip)
            window.removeEventListener('resize', toolTipPos)
            window.removeEventListener('scroll', toolTipPos)

            setTimeout(() => {
                $el.setAttribute('data-tooltip', tip);
                $toolTip.parentNode.removeChild($toolTip)
                
            }, TRANSITION_DURATION)
        }

        window.addEventListener('resize', toolTipPos, true);
        window.addEventListener('scroll', toolTipPos, true);

        $el.addEventListener('mouseleave', removeToolTip, false)
    }, true)
}()