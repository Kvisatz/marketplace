<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Appeal;
use Illuminate\Support\Facades\Mail;
use App\Mail\AppealCreated;


class AppealCreateEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $appeal;
    
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($appeal)
    {
        $this->appeal = $appeal;
        
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        
        Mail::to($this->appeal->user_email)->send(new AppealCreated($this->appeal));
        
    }
}
