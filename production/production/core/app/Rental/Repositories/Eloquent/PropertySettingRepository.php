<?php
/**
 * Created by PhpStorm.
 * User: Kevin G. Mungai
 * WhatsApp: +254724475357
 * Date: 6/17/2021
 * Time: 3:09 PM
 */

namespace App\Rental\Repositories\Eloquent;

use App\Rental\Repositories\Contracts\PropertySettingInterface;
use App\Models\PropertySetting;

class PropertySettingRepository extends BaseRepository implements PropertySettingInterface
{

    protected $model;

    /**
     * PropertySettingRepository constructor.
     * @param PropertySetting $model
     */
    function __construct(PropertySetting $model)
    {
        $this->model = $model;
    }
}
