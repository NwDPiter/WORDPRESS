<?php

/**
 * Renders the content of the item metadata
 * using Tainacan template functions
 */
function tainacan_blocks_render_item_metadata( $block_attributes, $content, $block ) {

    $is_dynamic = isset($block_attributes['isDynamic']) ? ($block_attributes['isDynamic'] === 'true' || $block_attributes['isDynamic'] == 1) : false;

    if ( $is_dynamic) {

        // Basic check, otherwise we don't have nothing to render here.
        $item_id = !empty($block->context['tainacan/itemId']) ? $block->context['tainacan/itemId'] : (isset($block_attributes['itemId']) ? $block_attributes['itemId'] : false);
        $collection_id = isset($block_attributes['collectionId']) ? $block_attributes['collectionId'] : false;
        $metadata = isset($block_attributes['metadata']) ? $block_attributes['metadata'] : [];
        $template_mode = isset($block_attributes['templateMode']) ? $block_attributes['templateMode'] : false;
        
        // Builds args from backend query
        $args = [
            'metadata__in' => array_map(function($metadatum) { return $metadatum['id']; }, $metadata)
        ];

        // Classes from block and Text alignment
        $text_align = isset($block_attributes['textAlign']) ? $block_attributes['textAlign'] : false;

        $wrapper_attributes = get_block_wrapper_attributes(
            array(
                'class' => 'metadata-type-$type' . ( $text_align ? (' has-text-align-' . $text_align) : '' )
            )
        );
        $args['before'] = '<div ' . $wrapper_attributes . '>';
        $args['after'] = '</div>';

        if ( $template_mode && $collection_id ) {
            // Checks if we are in the edit page or in the published
            $current_post = get_post();
            $collection_pt_pattern = '/' . \Tainacan\Entities\Collection::$db_identifier_prefix . '\d+' . \Tainacan\Entities\Collection::$db_identifier_sufix . '/';

            if ( $current_post === NULL )
                    return \Tainacan\Theme_Helper::get_instance()->get_tainacan_item_metadata_template($args, $collection_id );
            else if ( $current_post->post_type !== false && preg_match($collection_pt_pattern, $current_post->post_type) )
                return tainacan_get_the_metadata( $args, $current_post->ID );
            
        } else if ( $item_id ) {
            return tainacan_get_the_metadata( $args, $item_id );
        }

    } else {

        // Classes from block and Text alignment
        $text_align = isset($block_attributes['textAlign']) ? $block_attributes['textAlign'] : false;
        $wrapper_attributes = get_block_wrapper_attributes(
            array(
                'class' => ( $text_align ? (' has-text-align-' . $text_align) : '' )
            )
        );
        
        // Gets inner blocks and wraps them with this parent wrapper
        $inner_blocks = $block->inner_blocks;
        $inner_blocks_html = '';
        foreach ( $inner_blocks as $inner_block ) {
            $inner_blocks_html .= $inner_block->render();
        }
        return '<div ' . $wrapper_attributes . '>' . $inner_blocks_html . '</div>';
    }
}
