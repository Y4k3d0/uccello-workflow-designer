<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Uccello\Core\Database\Migrations\Migration;
use Uccello\Core\Models\Module;
use Uccello\Core\Models\Domain;
use Uccello\Core\Models\Tab;
use Uccello\Core\Models\Block;
use Uccello\Core\Models\Field;
use Uccello\Core\Models\Filter;

class CreateWorkflowModule extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->createTable();

        $module = $this->createModule();
        $this->activateModuleOnDomains($module);
        $this->createTabsBlocksFields($module);
        $this->createFilters($module);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop table
        Schema::dropIfExists($this->tablePrefix . 'workflows');

        // Delete module
        Module::where('name', 'workflow')->forceDelete();
    }

    protected function createTable()
    {
        Schema::create($this->tablePrefix . 'workflows', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->unsignedInteger('module_id')->nullable();
            $table->text('structure')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    protected function createModule()
    {
        $module = new  Module();
        $module->name = 'workflow';
        $module->icon = 'compare_arrows';
        $module->model_class = 'Uccello\WorkflowDesigner\Models\Workflow';
        $module->data = ["package" => "workflow-designer", "admin" => true];
        $module->save();

        return $module;
    }

    protected function activateModuleOnDomains($module)
    {
        $domains = Domain::all();

        foreach ($domains as $domain) {
            $domain->modules()->attach($module);
        }
    }

    protected function createTabsBlocksFields($module)
    {
        // Main tab
        $tab = new Tab();
        $tab->label = 'tab.main';
        $tab->icon = null;
        $tab->sequence = 0;
        $tab->module_id = $module->id;
        $tab->save();

        // General block
        $block = new Block();
        $block->label = 'block.general';
        $block->icon = 'info';
        $block->sequence = 0;
        $block->tab_id = $tab->id;
        $block->module_id = $module->id;
        $block->save();

        // Name
        $field = new Field();
        $field->name = 'name';
        $field->uitype_id = uitype('text')->id;
        $field->displaytype_id = displaytype('everywhere')->id;
        $field->data = ['rules' => 'required'];
        $field->sequence = 0;
        $field->block_id = $block->id;
        $field->module_id = $module->id;
        $field->save();

        // Description
        $field = new Field();
        $field->name = 'description';
        $field->uitype_id = uitype('text')->id;
        $field->displaytype_id = displaytype('everywhere')->id;
        $field->data = null;
        $field->sequence = 1;
        $field->block_id = $block->id;
        $field->module_id = $module->id;
        $field->save();
    }

    protected function createFilters($module)
    {
        $filter = new Filter();
        $filter->module_id = $module->id;
        $filter->domain_id = null;
        $filter->user_id = null;
        $filter->name = 'filter.all';
        $filter->type = 'list';
        $filter->columns = ['id', 'name', 'description'];
        $filter->conditions = null;
        $filter->order_by = null;
        $filter->is_default = true;
        $filter->is_public = false;
        $filter->save();
    }
}
